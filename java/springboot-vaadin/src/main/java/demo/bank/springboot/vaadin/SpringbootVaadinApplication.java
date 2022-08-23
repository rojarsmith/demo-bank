package demo.bank.springboot.vaadin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.server.PWA;

@SpringBootApplication(exclude = ErrorMvcAutoConfiguration.class)
@PWA(name = "VaadinCRM", shortName = "CRM", offlinePath = "offline.html", offlineResources = { "./styles/offline.css",
		"./images/offline.png" })
public class SpringbootVaadinApplication extends SpringBootServletInitializer implements AppShellConfigurator {

	private static final long serialVersionUID = -8380160364189618667L;

	public static void main(String[] args) {
		SpringApplication.run(SpringbootVaadinApplication.class, args);
	}

}
