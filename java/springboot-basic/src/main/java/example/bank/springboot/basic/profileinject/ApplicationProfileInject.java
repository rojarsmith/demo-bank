package example.bank.springboot.basic.profileinject;

import javax.sql.DataSource;

import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = { "example.bank.springboot.basic.profileinject" })
public class ApplicationProfileInject {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(ApplicationProfileInject.class, args);
		DataSource dataSource = (DataSource) context.getBean("dataSource1");
		System.out.println("[" + ApplicationProfileInject.class.getSimpleName() + "] " + dataSource.getClass());
	}

}
