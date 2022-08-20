package demo.bank.springboot.vaadin.crm.ui.view.list;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import demo.bank.springboot.vaadin.crm.backend.entity.Company;
import demo.bank.springboot.vaadin.crm.backend.entity.Contact;
import demo.bank.springboot.vaadin.crm.backend.service.CompanyService;
import demo.bank.springboot.vaadin.crm.backend.service.ContactService;
import demo.bank.springboot.vaadin.crm.ui.MainLayout;

/**
 * @author Rojar Smith
 *
 * @date 2022 Jul 8
 **/
@Route(value = "", layout = MainLayout.class)
@PageTitle("Contacts | Vaadin CRM")
public class ListView extends VerticalLayout {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6631199031632258359L;

	private ContactService contactService;

	// Defines a new field grid and instantiates it to a Grid of type Contact.
	private Grid<Contact> grid = new Grid<>(Contact.class);
	private TextField filterText = new TextField();
	private ContactForm form;

	public ListView(ContactService contactService, CompanyService companyService) {
		this.contactService = contactService;
		// Gives the component a CSS class name to help with styling.
		addClassName("list-view");
		setSizeFull();

//		getToolbar();
		configureGrid();

		form = new ContactForm(companyService.findAll());
		form.addListener(ContactForm.SaveEvent.class, this::saveContact);
		form.addListener(ContactForm.DeleteEvent.class, this::deleteContact);
		form.addListener(ContactForm.CloseEvent.class, e -> closeEditor());

		Div content = new Div(grid, form);
		content.addClassName("content");
		content.setSizeFull();

		add(getToolbar(), content);
		updateList();

		closeEditor();
	}

	private void saveContact(ContactForm.SaveEvent event) {
		contactService.save(event.getContact());
		updateList();
		closeEditor();
	}

	private void deleteContact(ContactForm.DeleteEvent event) {
		contactService.delete(event.getContact());
		updateList();
		closeEditor();
	}

	private HorizontalLayout getToolbar() {
		filterText.setPlaceholder("Filter by name...");
		filterText.setClearButtonVisible(true);
		filterText.setValueChangeMode(ValueChangeMode.LAZY);
		filterText.addValueChangeListener(e -> updateList());

		Button addContactButton = new Button("Add contact");
		addContactButton.addClickListener(click -> addContact());

		HorizontalLayout toolbar = new HorizontalLayout(filterText, addContactButton);
		toolbar.addClassName("toolbar");
		return toolbar;
	}

	void addContact() {
		grid.asSingleSelect().clear();
		editContact(new Contact());
	}

	private void configureGrid() {
		grid.addClassName("contact-grid");
		grid.setSizeFull();
		grid.removeColumnByKey("company");
		grid.setColumns("firstName", "lastName", "email", "status");
		grid.addColumn(contact -> {
			Company company = contact.getCompany();
			return company == null ? "-" : company.getName();
		}).setHeader("Company");
		grid.getColumns().forEach(col -> col.setAutoWidth(true));

		grid.asSingleSelect().addValueChangeListener(event -> editContact(event.getValue()));
	}

	public void editContact(Contact contact) {
		if (contact == null) {
			closeEditor();
		} else {
			form.setContact(contact);
			form.setVisible(true);
			addClassName("editing");
		}
	}

	private void closeEditor() {
		form.setContact(null);
		form.setVisible(false);
		removeClassName("editing");
	}

	private void updateList() {
		grid.setItems(contactService.findAll(filterText.getValue()));
	}

}
