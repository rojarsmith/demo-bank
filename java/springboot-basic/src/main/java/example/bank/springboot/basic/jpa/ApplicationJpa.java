package example.bank.springboot.basic.jpa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan(basePackages = { "example.bank.springboot.basic.jpa" })
@EnableJpaRepositories(basePackages = "example.bank.springboot.basic.jpa")
@EntityScan(basePackages = "example.bank.springboot.basic.jpa")
@SpringBootApplication
public class ApplicationJpa {

	public static void main(String[] args) {
		SpringApplication.run(ApplicationJpa.class, args);
	}

}
