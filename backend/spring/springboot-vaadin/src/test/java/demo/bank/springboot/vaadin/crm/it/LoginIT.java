package demo.bank.springboot.vaadin.crm.it;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import demo.bank.springboot.vaadin.crm.it.elements.login.LoginViewElement;

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
		LoginViewElement loginView = $(LoginViewElement.class).onPage().first();
		Assertions.assertTrue(loginView.login("user", "password"));
	}

	@Test
	public void loginAsInvalidUserFails() {
		LoginViewElement loginView = $(LoginViewElement.class).onPage().first();
		Assertions.assertFalse(loginView.login("user", "invalid"));
	}

}
