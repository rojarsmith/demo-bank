package demo.bank.springboot.vaadin.crm.ui;

import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.value.ValueChangeMode;
import com.vaadin.flow.router.Route;

import demo.bank.springboot.vaadin.crm.backend.entity.Company;
import demo.bank.springboot.vaadin.crm.backend.entity.Contact;
import demo.bank.springboot.vaadin.crm.backend.service.ContactService;

/**
 * @author Rojar Smith
 *
 * @date 2022 Jul 8
 **/
@Route("")
public class MainView extends VerticalLayout {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6631199031632258359L;

	private ContactService contactService;

	// Defines a new field grid and instantiates it to a Grid of type Contact.
	private Grid<Contact> grid = new Grid<>(Contact.class);
	private TextField filterText = new TextField();

	public MainView(ContactService contactService) {
		this.contactService = contactService;
		// Gives the component a CSS class name to help with styling.
		addClassName("list-view");
		setSizeFull();
		configureFilter();
		configureGrid();

		add(filterText, grid);
		updateList();
	}

	private void configureFilter() {
		filterText.setPlaceholder("Filter by name...");
		filterText.setClearButtonVisible(true);
		filterText.setValueChangeMode(ValueChangeMode.LAZY);
		filterText.addValueChangeListener(e -> updateList());
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
	}

	private void updateList() {
		grid.setItems(contactService.findAll());
	}

}
