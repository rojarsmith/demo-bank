package example.bank.springboot.basic.beanscope;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = { "example.bank.springboot.basic.beanscope" })
@SpringBootApplication
public class ApplicationBeanScope {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(ApplicationBeanScope.class, args);
		Device device1 = context.getBean(Device.class);
		Device device2 = context.getBean(Device.class);
		System.out.println(device1 == device2);
	}

}
