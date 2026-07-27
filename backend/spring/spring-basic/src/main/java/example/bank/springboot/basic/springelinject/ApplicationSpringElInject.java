package example.bank.springboot.basic.springelinject;

import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = { "example.bank.springboot.basic.springelinject" })
public class ApplicationSpringElInject {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(ApplicationSpringElInject.class, args);
		DatabaseConfig databaseConfig = (DatabaseConfig) context.getBean("databaseConfig");
		databaseConfig.getDataSource1();
		System.out.println("[" + ApplicationSpringElInject.class.getSimpleName() + "] " + databaseConfig.getClass());
	}

}
