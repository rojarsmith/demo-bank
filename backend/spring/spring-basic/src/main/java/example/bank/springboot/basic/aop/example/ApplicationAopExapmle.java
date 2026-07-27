package example.bank.springboot.basic.aop.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = { "example.bank.springboot.basic.aop.example" })
@SpringBootApplication
public class ApplicationAopExapmle {

	// The example work after removing this function.
	@Bean(name = "myAspect")
	public MyAspect initMyAspect() {
		return new MyAspect();
	}
	
	@Bean(name = "myAspect2")
	public MyAspect2 initMyAspect2() {
		return new MyAspect2();
	}

	public static void main(String[] args) {
		SpringApplication.run(ApplicationAopExapmle.class, args);
	}

}
