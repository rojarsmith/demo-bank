package demo.bank.springboot.vaadin.crm.ui;

import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

import demo.bank.springboot.vaadin.crm.backend.entity.Contact;

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

	// Defines a new field grid and instantiates it to a Grid of type Contact.
	private Grid<Contact> grid = new Grid<>(Contact.class);

	public MainView() {
		// Gives the component a CSS class name to help with styling.
		addClassName("list-view");
		setSizeFull();
		configureGrid();

		add(grid);
	}

	private void configureGrid() {
		grid.addClassName("contact-grid");
		grid.setSizeFull();
		grid.setColumns("firstName", "lastName", "email", "status");
	}

}
