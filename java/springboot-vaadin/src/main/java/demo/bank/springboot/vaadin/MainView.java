package demo.bank.springboot.vaadin;

import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

/**
 * @author Rojar Smith
 *
 * @date 2022 Jul 8
 **/
@Route
public class MainView extends VerticalLayout {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6631199031632258359L;

	public MainView() {
		// Use TextField for standard text input
		TextField textField = new TextField("Your name");
		textField.addThemeName("bordered");

		// Button click listeners can be defined as lambda expressions
		Button button = new Button("Say hello");

		HorizontalLayout layout = new HorizontalLayout(textField, button);
		layout.setDefaultVerticalComponentAlignment(Alignment.END);
		add(new Text("Welcome to MainView."), layout);
	}

}
