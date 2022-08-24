package demo.bank.springboot.vaadin.crm.ui.view.list;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.data.provider.ListDataProvider;

import demo.bank.springboot.vaadin.crm.backend.entity.Contact;

/**
 * @author Rojar Smith
 *
 * @date 2022 Aug 24
 **/
@ExtendWith(SpringExtension.class)
@SpringBootTest
public class ListViewTest {

	@Autowired
	private ListView listView;

	@Test
	public void formShownWhenContactSelected() {
		Grid<Contact> grid = listView.grid;
		Contact firstContact = getFirstItem(grid);
		ContactForm form = listView.form;
		Assertions.assertFalse(form.isVisible());
		grid.asSingleSelect().setValue(firstContact);
		Assertions.assertTrue(form.isVisible());
		Assertions.assertEquals(firstContact.getFirstName(), form.firstName.getValue());
	}

	@SuppressWarnings("unchecked")
	private Contact getFirstItem(Grid<Contact> grid) {
		return ((ListDataProvider<Contact>) grid.getDataProvider()).getItems().iterator().next();
	}
}
