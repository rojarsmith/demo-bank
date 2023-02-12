package demo.bank.springboot.authorization.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class SpringbootAuthorizationServerApplication {

    public static void main(String[] args) {
        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        System.out.println( //
                "rojarsmith=" + passwordEncoder.encode("rojarsmith"));
        SpringApplication.run(SpringbootAuthorizationServerApplication.class, args);
    }

}
