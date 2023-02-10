package demo.bank.springboot.authorization.server.config;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

import lombok.extern.slf4j.Slf4j;

/**
 * @author Rojar Smith
 *
 * @date 2023 Feb 10
 */
@Profile("default")
@Configuration(proxyBeanMethods = false)
@Slf4j
public class DefaultSecurityConfig {

	@Bean
	SecurityFilterChain h2ConsoleSecurityFilterChain(HttpSecurity http) throws Exception {
		log.info("--- h2ConsoleSecurityFilterChain ---");
		http //
				.authorizeHttpRequests() //
				.requestMatchers(PathRequest.toH2Console()) //
				.permitAll() //
				.and() //
				.formLogin().disable() //
				.csrf().ignoringRequestMatchers(PathRequest.toH2Console()) //
				.and().headers().frameOptions().sameOrigin();

		return http.build();
	}

}
