package demo.bank.springboot.authorization.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

/**
 * @author Rojar Smith
 *
 * @date 2023 Feb 11
 */
@Configuration(proxyBeanMethods = true)
public class AuthorizationServerConfig {

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

}
