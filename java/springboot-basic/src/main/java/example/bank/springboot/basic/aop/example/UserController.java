package example.bank.springboot.basic.aop.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-04
 */
@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService = null;
//	private UserServiceImpl userService = null;
	
	@RequestMapping("/print")
	@ResponseBody
	public User printUser(Long id, String userName, String note) {
		User user = new User();
		user.setId(id);
		user.setUserName(userName);
		user.setNote(note);
		userService.printUser(user);
		return user;
	}

	@RequestMapping("/vp")
	@ResponseBody
	public User validateAndPrint(Long id, String userName, String note) {
		User user = new User();
		user.setId(id);
		user.setUserName(userName);
		user.setNote(note);
		UserValidator userValidator = (UserValidator) userService;
		if (userValidator.validate(user)) {
			userService.printUser(user);
		}
		return user;
	}

}
