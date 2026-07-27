package demo.bank.springboot.vaadin.crm.ui.view.list;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import demo.bank.springboot.vaadin.crm.backend.entity.Company;
import demo.bank.springboot.vaadin.crm.backend.entity.Contact;

/**
 * @author Rojar Smith
 *
 * @date 2022 Aug 23
 **/
public class ContactFormTest {
	private List<Company> companies;
	private Contact marcUsher;
	private Company company1;
	private Company company2;

	@BeforeEach
	public void setupData() {
		companies = new ArrayList<>();
		company1 = new Company("Vaadin Ltd");
		company2 = new Company("IT Mill");
		companies.add(company1);
		companies.add(company2);

		marcUsher = new Contact();
		marcUsher.setFirstName("Marc");
		marcUsher.setLastName("Usher");
		marcUsher.setEmail("marc@usher.com");
		marcUsher.setStatus(Contact.Status.NotContacted);
		marcUsher.setCompany(company2);
	}

	@Test
	public void formFieldsPopulated() {
		ContactForm form = new ContactForm(companies);
		form.setContact(marcUsher);
		Assertions.assertEquals("Marc", form.firstName.getValue());
		Assertions.assertEquals("Usher", form.lastName.getValue());
		Assertions.assertEquals("marc@usher.com", form.email.getValue());
		Assertions.assertEquals(company2, form.company.getValue());
		Assertions.assertEquals(Contact.Status.NotContacted, form.status.getValue());
	}

	@Test
	public void saveEventHasCorrectValues() {
		ContactForm form = new ContactForm(companies);
		Contact contact = new Contact();
		form.setContact(contact);

		form.firstName.setValue("John");
		form.lastName.setValue("Doe");
		form.company.setValue(company1);
		form.email.setValue("john@doe.com");
		form.status.setValue(Contact.Status.Customer);

		AtomicReference<Contact> savedContactRef = new AtomicReference<>(null);
		form.addListener(ContactForm.SaveEvent.class, e -> {
			savedContactRef.set(e.getContact());
		});
		form.save.click();
		Contact savedContact = savedContactRef.get();
		Assertions.assertEquals("John", savedContact.getFirstName());
		Assertions.assertEquals("Doe", savedContact.getLastName());
		Assertions.assertEquals("john@doe.com", savedContact.getEmail());
		Assertions.assertEquals(company1, savedContact.getCompany());
		Assertions.assertEquals(Contact.Status.Customer, savedContact.getStatus());
	}
}
