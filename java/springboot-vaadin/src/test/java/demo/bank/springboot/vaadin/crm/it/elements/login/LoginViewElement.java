package demo.bank.springboot.vaadin.crm.it.elements.login;

import com.vaadin.flow.component.login.testbench.LoginFormElement;
import com.vaadin.flow.component.orderedlayout.testbench.VerticalLayoutElement;
import com.vaadin.testbench.annotations.Attribute;

/**
 * @author Rojar Smith
 *
 * @date 2022 Aug 24
 **/
@Attribute(name = "class", contains = "login-view")
public class LoginViewElement extends VerticalLayoutElement {

	public boolean login(String username, String password) {
		LoginFormElement form = $(LoginFormElement.class).first();
		form.getUsernameField().setValue(username);
		form.getPasswordField().setValue(password);
		form.getSubmitButton().click();
		// Return true if we end up on another page
		return !$(LoginViewElement.class).onPage().exists();
	}

}
