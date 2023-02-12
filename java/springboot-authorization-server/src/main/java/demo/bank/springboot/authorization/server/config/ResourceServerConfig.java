package demo.bank.springboot.authorization.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * @author Rojar Smith
 *
 * @date 2023 Feb 12
 */
@Configuration
@EnableMethodSecurity(prePostEnabled = true)
public class ResourceServerConfig {

    @Bean
    @Order(2)
    SecurityFilterChain resourceServerSecurityFilterChain(HttpSecurity http) throws Exception {
        http.securityMatcher("/api/**") //
                .authorizeHttpRequests().anyRequest().authenticated();

        http.sessionManagement().disable();

        http.oauth2ResourceServer() //
                .accessDeniedHandler(new ResourceAccessDeniedHandler())
                .authenticationEntryPoint(new ResourceAuthenticationEntryPoint()) //
                .jwt();

        return http.build();
    }

}
