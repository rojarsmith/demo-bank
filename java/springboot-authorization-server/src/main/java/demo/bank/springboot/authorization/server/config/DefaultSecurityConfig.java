package demo.bank.springboot.authorization.server.config;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
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
    @Order(3)
    SecurityFilterChain h2ConsoleSecurityFilterChain(HttpSecurity http) throws Exception {

        log.info("--- h2ConsoleSecurityFilterChain ---");

        http.securityMatcher(PathRequest.toH2Console()) // or "/h2/**"
                .authorizeHttpRequests() //
                .requestMatchers(PathRequest.toH2Console()) //
                .permitAll().and().csrf().ignoringRequestMatchers(PathRequest.toH2Console()).and().headers()
                .frameOptions().sameOrigin();
        return http.build();

    }

    @Bean
    @Order(4)
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests().anyRequest().authenticated() //
                .and() //
                .formLogin()
                .defaultSuccessUrl("http://127.0.0.1:8080/oauth2/authorize?response_type=code&client_id=client-demo&scope=message.read%20message.write&redirect_uri=http://127.0.0.1:8080/authorized", true);

        return http.build();
    }

    @Bean
    UserDetailsService userDetailsService() {

        log.info("userDetailsService");

        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

        UserDetails user = User //
                .withUsername("rojar") //
                .password(passwordEncoder.encode("123")) //
                .roles("USER") //
                .build();

        return new InMemoryUserDetailsManager(user);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

}
