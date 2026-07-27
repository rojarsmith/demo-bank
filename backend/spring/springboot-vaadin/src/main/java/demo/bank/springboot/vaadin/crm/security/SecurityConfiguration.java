package demo.bank.springboot.vaadin.crm.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

/**
 * @author Rojar Smith
 *
 * @date 2022 Aug 22
 **/
@Configuration
public class SecurityConfiguration {
	private static final String LOGIN_PROCESSING_URL = "/login";
	private static final String LOGIN_FAILURE_URL = "/login?error";
	private static final String LOGIN_URL = "/login";
	private static final String LOGOUT_SUCCESS_URL = "/login";

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf().disable()
		.requestCache().requestCache(new CustomRequestCache())
		.and().authorizeRequests()
				.requestMatchers(SecurityUtils::isFrameworkInternalRequest).permitAll()
				.anyRequest().authenticated()
				.and().formLogin().loginPage(LOGIN_URL)
				.permitAll().loginProcessingUrl(LOGIN_PROCESSING_URL)
				.failureUrl(LOGIN_FAILURE_URL)
				.and().logout().logoutSuccessUrl(LOGOUT_SUCCESS_URL);

		http.headers().frameOptions().sameOrigin();

		return http.build();
	}

	@Bean
	public UserDetailsService userDetailsService() {
		UserDetails user = User.withUsername("user").password("{noop}password").roles("USER").build();
		return new InMemoryUserDetailsManager(user);
	}

	@Bean
	public WebSecurityCustomizer webSecurityCustomizer() {
		return (web) -> web.ignoring().antMatchers(
				"/VAADIN/**",
	            "/favicon.ico",
	            "/robots.txt",
	            "/manifest.webmanifest",
	            "/sw.js",
	            "/offline.html",
	            "/icons/**",
	            "/images/**",
	            "/styles/**",
	            "/h2-console/**");
	}
	
}
