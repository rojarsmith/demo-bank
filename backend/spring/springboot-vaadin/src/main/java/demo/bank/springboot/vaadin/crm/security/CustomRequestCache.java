package demo.bank.springboot.vaadin.crm.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.web.savedrequest.HttpSessionRequestCache;

/**
 * @author Rojar Smith
 *
 * @date 2022 Aug 22
 **/
public class CustomRequestCache extends HttpSessionRequestCache {
	@Override
	public void saveRequest(HttpServletRequest request, HttpServletResponse response) {
		if (!SecurityUtils.isFrameworkInternalRequest(request)) {
			super.saveRequest(request, response);
		}
	}
}
