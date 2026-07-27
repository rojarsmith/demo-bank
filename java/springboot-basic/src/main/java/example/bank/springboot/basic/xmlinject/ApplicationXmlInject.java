package example.bank.springboot.basic.xmlinject;

import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;

@ComponentScan(basePackages = { "example.bank.springboot.basic.xmlinject" })
@ImportResource(value = { "classpath:spring-service.xml" })
public class ApplicationXmlInject {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(ApplicationXmlInject.class, args);
		DatabaseConfig databaseConfig = (DatabaseConfig) context.getBean("databaseConfig");
		System.out.println("[" + ApplicationXmlInject.class.getSimpleName() + "] " + databaseConfig.getClass());
	}

}
