package demo.bank.springboot.vaadin.crm.it;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import com.vaadin.flow.component.login.testbench.LoginFormElement;

/**
 * @author Rojar Smith
 *
 * @date 2022 Aug 24
 **/
public class LoginIT extends AbstractTest {

	public LoginIT() {
		super("");
	}

	@Test
	public void loginAsValidUserSucceeds() {
		// Find the LoginForm used on the page
		LoginFormElement form = $(LoginFormElement.class).first();
		// Enter the credentials and log in
		form.getUsernameField().setValue("user");
		form.getPasswordField().setValue("password");
		form.getSubmitButton().click();
		// Ensure the login form is no longer visible
		Assertions.assertFalse($(LoginFormElement.class).exists());
	}

}
