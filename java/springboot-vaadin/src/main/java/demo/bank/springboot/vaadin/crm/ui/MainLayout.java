package demo.bank.springboot.vaadin.crm.ui;

import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.FlexComponent.Alignment;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.HighlightConditions;
import com.vaadin.flow.router.RouterLink;

import demo.bank.springboot.vaadin.crm.security.SecurityService;
import demo.bank.springboot.vaadin.crm.ui.view.dashboard.DashboardView;
import demo.bank.springboot.vaadin.crm.ui.view.list.ListView;

/**
 * @author Rojar Smith
 *
 * @date 2022 Aug 20
 */
@CssImport("./shared-styles.css")
public class MainLayout extends AppLayout {

	private static final long serialVersionUID = -3315920259068297490L;

	private final SecurityService securityService;

	public MainLayout(SecurityService securityService) {
		this.securityService = securityService;
		createHeader();
		createDrawer();
	}

	private void createHeader() {
		H1 logo = new H1("Vaadin CRM");
		logo.addClassNames("text-l", "m-m");

		Button logout = new Button("Log out", e -> securityService.logout());

		HorizontalLayout header = new HorizontalLayout(new DrawerToggle(), logo, logout);

		header.setDefaultVerticalComponentAlignment(Alignment.CENTER);
		header.expand(logo);
		header.setWidth("100%");
		header.addClassNames("py-0", "px-m");

		addToNavbar(header);
	}

	private void createDrawer() {
		RouterLink listLink = new RouterLink("List", ListView.class);
		listLink.setHighlightCondition(HighlightConditions.sameLocation());

		addToDrawer(new VerticalLayout(listLink, new RouterLink("Dashboard", DashboardView.class)));
	}

}
