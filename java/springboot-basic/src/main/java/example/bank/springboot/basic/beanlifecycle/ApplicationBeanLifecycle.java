package example.bank.springboot.basic.beanlifecycle;

import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = { "example.bank.springboot.basic.beanlifecycle" })
public class ApplicationBeanLifecycle {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(ApplicationBeanLifecycle.class, args);
		BeanLifecycle1 beanLifecycle1 = context.getBean(BeanLifecycle1.class);
		beanLifecycle1.run();		
	}

}
