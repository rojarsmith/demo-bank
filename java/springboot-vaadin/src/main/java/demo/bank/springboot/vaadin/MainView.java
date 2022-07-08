package demo.bank.springboot.vaadin;

import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
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
		add(new Text("Welcome to MainView."));
	}

}
