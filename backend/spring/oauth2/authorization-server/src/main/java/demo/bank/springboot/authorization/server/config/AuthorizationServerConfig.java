package demo.bank.springboot.authorization.server.config;

import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.EncodedKeySpec;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.time.Duration;
import java.time.Instant;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.OidcScopes;
import org.springframework.security.oauth2.jose.jws.SignatureAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.server.authorization.JdbcOAuth2AuthorizationConsentService;
import org.springframework.security.oauth2.server.authorization.JdbcOAuth2AuthorizationService;
import org.springframework.security.oauth2.server.authorization.OAuth2AuthorizationConsentService;
import org.springframework.security.oauth2.server.authorization.OAuth2AuthorizationService;
import org.springframework.security.oauth2.server.authorization.client.JdbcRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.config.annotation.web.configuration.OAuth2AuthorizationServerConfiguration;
import org.springframework.security.oauth2.server.authorization.config.annotation.web.configurers.OAuth2AuthorizationServerConfigurer;
import org.springframework.security.oauth2.server.authorization.settings.AuthorizationServerSettings;
import org.springframework.security.oauth2.server.authorization.settings.ClientSettings;
import org.springframework.security.oauth2.server.authorization.settings.OAuth2TokenFormat;
import org.springframework.security.oauth2.server.authorization.settings.TokenSettings;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.RequestMatcher;

import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;

/**
 * @author Rojar Smith
 *
 * @date 2023 Feb 11
 */
@Configuration(proxyBeanMethods = true)
@EnableWebSecurity
public class AuthorizationServerConfig {

    @Autowired
    ResourceLoader resourceLoader;

    /**
     * Default Ebdpoints
     *
     * <p>
     * Authorization /oauth2/authorize Token Endpoint /oauth2/token Token Revocation
     * /oauth2/revoke Token Introspection /oauth2/introspect JWK Set Ecdpoint
     * /oauth2/jwks Authorization Server Metadata
     * /.well-known/oauth-authorization-server OIDC Provider Configuration
     * /.well-known/openid-configuration
     */
    @Bean
    @Order(1)
    SecurityFilterChain authorizationServerSecurityFilterChain(HttpSecurity http) throws Exception {

        OAuth2AuthorizationServerConfigurer authorizationServerConfigurer = new OAuth2AuthorizationServerConfigurer();
        RequestMatcher authorizationServerEndpointsMatcher = authorizationServerConfigurer.getEndpointsMatcher();

        http.securityMatcher(authorizationServerEndpointsMatcher) //
                .authorizeHttpRequests() //
                .anyRequest().authenticated() //
                .and() //
                .csrf() //
                .ignoringRequestMatchers(authorizationServerEndpointsMatcher) //
                .and() //
                .apply(authorizationServerConfigurer);

        return http.build();
    }

    @Bean
    AuthorizationServerSettings authorizationServerSettings() {
        return AuthorizationServerSettings.builder().build();
    }

    @Bean
    RegisteredClientRepository registeredClientRepository(JdbcTemplate jdbcTemplate) {

        RegisteredClient registeredClient = RegisteredClient //
                .withId("1") //
                .clientId("client-demo") //
                .clientIdIssuedAt(Instant.now()) //
                .clientSecret("$2a$10$NeQMbPPUjEOmfrw5mCJazegthpQzI1fcqUPOdZTGEv26cpHzCCe.G") //
                .clientSecretExpiresAt(null) //
                .clientName("demo") //
                .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC) //
                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE) //
                .redirectUri("http://127.0.0.1:8080/") //
                .scope(OidcScopes.OPENID) //
                .scope("message.read") //
                .scope("message.write") //
                .clientSettings( //
                        ClientSettings.builder() //
                                .requireAuthorizationConsent(true).build())
                .tokenSettings(TokenSettings.builder()
                        // token valid in 100 minutes
                        .accessTokenTimeToLive(Duration.ofMinutes(100L))
                        // default JWT format
                        .accessTokenFormat(OAuth2TokenFormat.SELF_CONTAINED)
                        // enable refresh token
                        .reuseRefreshTokens(true)
                        // refreshToken valid in 120 minutes
                        .refreshTokenTimeToLive(Duration.ofMinutes(120L))
                        .idTokenSignatureAlgorithm(SignatureAlgorithm.RS256).build())
                .build();

        JdbcRegisteredClientRepository registeredClientRepository = //
                new JdbcRegisteredClientRepository(jdbcTemplate);

        if (null == registeredClientRepository.findByClientId("client-demo")) {
            registeredClientRepository.save(registeredClient); // save to database
        }

        return registeredClientRepository;
    }

    @Bean
    OAuth2AuthorizationService authorizationService(JdbcTemplate jdbcTemplate,
            RegisteredClientRepository registeredClientRepository) {
        return new JdbcOAuth2AuthorizationService(jdbcTemplate, registeredClientRepository);
    }

    @Bean
    OAuth2AuthorizationConsentService authorizationConsentService(JdbcTemplate jdbcTemplate,
            RegisteredClientRepository registeredClientRepository) {
        return new JdbcOAuth2AuthorizationConsentService(jdbcTemplate, registeredClientRepository);
    }

    @Bean
    JWKSource<SecurityContext> jwkSource() {
        Resource rprv = resourceLoader.getResource("classpath:key.prv");
        Resource rpub = resourceLoader.getResource("classpath:key.pub");

        KeyPair keyPair;
        keyPair = generateRsaKey(rprv, rpub);

        RSAPublicKey publicKey = (RSAPublicKey) keyPair.getPublic();
        RSAPrivateKey privateKey = (RSAPrivateKey) keyPair.getPrivate();
        RSAKey rsaKey = new RSAKey.Builder(publicKey).privateKey(privateKey).keyID(UUID.randomUUID().toString())
                .build();
        JWKSet jwkSet = new JWKSet(rsaKey);

        return new ImmutableJWKSet<>(jwkSet);
    }

    @Bean
    JwtDecoder jwtDecoder(JWKSource<SecurityContext> jwkSource) {
        return OAuth2AuthorizationServerConfiguration.jwtDecoder(jwkSource);
    }

    @Bean
    EmbeddedDatabase embeddedDatabase() {
        return new EmbeddedDatabaseBuilder() //
                .setType(EmbeddedDatabaseType.H2).setScriptEncoding("UTF-8") //
                .addScript("org/springframework/security/oauth2/server/authorization/oauth2-authorization-schema.sql")
                .addScript(
                        "org/springframework/security/oauth2/server/authorization/oauth2-authorization-consent-schema.sql")
                .addScript(
                        "org/springframework/security/oauth2/server/authorization/client/oauth2-registered-client-schema.sql")
                .build();
    }

    private static KeyPair generateRsaKey(Resource resourcePrv, Resource resourcePub) {

        KeyPair keyPair = null;

        if (resourcePrv.exists() && resourcePub.exists()) {
            byte[] prv;
            byte[] pub;
            try {
                File fprv = new ClassPathResource("key.prv").getFile();
                prv = Files.readAllBytes(fprv.toPath());

                KeyFactory privateKeyFactory = KeyFactory.getInstance("RSA");
                EncodedKeySpec privateKeySpec = new PKCS8EncodedKeySpec(prv);
                PrivateKey privateKey = privateKeyFactory.generatePrivate(privateKeySpec);

                File fpub = new ClassPathResource("key.pub").getFile();
                pub = Files.readAllBytes(fpub.toPath());

                KeyFactory publicKeyFactory = KeyFactory.getInstance("RSA");
                EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(pub);
                PublicKey publicKey = publicKeyFactory.generatePublic(publicKeySpec);

                keyPair = new KeyPair(publicKey, privateKey);
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            try {
                KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
                keyPairGenerator.initialize(2048);
                keyPair = keyPairGenerator.generateKeyPair();
            } catch (Exception ex) {
                throw new IllegalStateException(ex);
            }

            // Save key to file.
            PrivateKey privateKey = keyPair.getPrivate();
            PublicKey publicKey = keyPair.getPublic();

            try (FileOutputStream outPrivate = new FileOutputStream("src/main/resources/key.prv")) {
                outPrivate.write(privateKey.getEncoded());
            } catch (Exception e) {
                e.printStackTrace();
            }

            try (FileOutputStream outPublic = new FileOutputStream("src/main/resources/key.pub")) {
                outPublic.write(publicKey.getEncoded());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return keyPair;
    }

}
