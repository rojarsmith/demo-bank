package demo.bank.springboot.vaadin.crm.ui;

import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextField;

import demo.bank.springboot.vaadin.crm.backend.entity.Company;
import demo.bank.springboot.vaadin.crm.backend.entity.Contact;

/**
 * @author Rojar Smith
 *
 * @date 2022 Aug 19
 **/
public class ContactForm extends FormLayout {
	TextField firstName = new TextField("First name");
	TextField lastName = new TextField("Last name");
	EmailField email = new EmailField("Email");
	ComboBox<Contact.Status> status = new ComboBox<>("Status");
	ComboBox<Company> company = new ComboBox<>("Company");

	Button save = new Button("Save");
	Button delete = new Button("Delete");
	Button close = new Button("Cancel");

	public ContactForm() {
		addClassName("contact-form");
		add(firstName, lastName, email, company, status, createButtonsLayout());
	}

	private HorizontalLayout createButtonsLayout() {
		save.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
		delete.addThemeVariants(ButtonVariant.LUMO_ERROR);
		close.addThemeVariants(ButtonVariant.LUMO_TERTIARY);
		save.addClickShortcut(Key.ENTER);
		close.addClickShortcut(Key.ESCAPE);

		return new HorizontalLayout(save, delete, close);
	}
}
