package demo.bank.springboot.authorization.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class SpringbootAuthorizationServerApplication {

	public static void main(String[] args) {
		System.out.println("rojarsmith=" + new BCryptPasswordEncoder().encode("rojarsmith"));
		SpringApplication.run(SpringbootAuthorizationServerApplication.class, args);
	}

}
