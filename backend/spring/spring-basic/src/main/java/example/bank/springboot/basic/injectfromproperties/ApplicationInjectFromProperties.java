package example.bank.springboot.basic.injectfromproperties;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = { "example.bank.springboot.basic.injectfromproperties" })
@SpringBootApplication
public class ApplicationInjectFromProperties {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(ApplicationInjectFromProperties.class, args);
		DataBaseProperties dataBaseProperties = context.getBean(DataBaseProperties.class);
		dataBaseProperties.getClass();
	}

}
