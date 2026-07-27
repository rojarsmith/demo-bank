package example.bank.springboot.basic.conditionalinject;

import javax.sql.DataSource;

import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = { "example.bank.springboot.basic.conditionalinject" })
public class ApplicationConditionalInject {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(ApplicationConditionalInject.class, args);
		
		/*
		 * Exception:
		 * Caused by: org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named 'dataSourceConditional' available
		 */
		DataSource dataSource = (DataSource) context.getBean("dataSourceConditional");
		System.out.println("[" + ApplicationConditionalInject.class.getSimpleName() + "] " + dataSource.getClass());
	}

}
