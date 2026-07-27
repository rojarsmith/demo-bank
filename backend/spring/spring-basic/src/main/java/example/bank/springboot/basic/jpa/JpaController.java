package example.bank.springboot.basic.jpa;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-06
 */
@Controller
@RequestMapping("/user")
public class JpaController {

	@Autowired
	JpaUserRepository jpaUserRepository;

	@Autowired
	UserService userService;

	@Autowired
	UserBatchService userBatchService;

	@PostConstruct
	void init() {
		User user = new User();
		user.setUserName("name_1");
		user.setNote("note_1");
		user.setSex(SexEnum.MALE);
		jpaUserRepository.save(user);
	}

	@RequestMapping("/get")
	@ResponseBody
	public User getUser(Long id) {
		User user = jpaUserRepository.findById(id).get();
		return user;
	}

	@RequestMapping("/insert")
	@ResponseBody
	public Map<String, Object> insertUser(String userName, String note) {
		User user = new User();
		user.setUserName("userName");
		user.setNote("note");
		user.setSex(SexEnum.MALE);
		int update = userService.insertUser(user);
		Map<String, Object> result = new HashMap<>();
		result.put("success", update == 1);
		result.put("user", user);
		return result;
	}

	@RequestMapping("/inserts")
	@ResponseBody
	public Map<String, Object> insertUsers(String userName1, String note1, String userName2, String note2) {
		User user1 = new User();
		user1.setUserName("userName1");
		user1.setNote("note1");
		user1.setSex(SexEnum.MALE);

		User user2 = new User();
		user2.setUserName("userName2");
		user2.setNote("note2");
		user2.setSex(SexEnum.MALE);

		List<User> userList = new ArrayList<>();
		userList.add(user1);
		userList.add(user2);

		int update = userBatchService.insertUsers(userList);

		Map<String, Object> result = new HashMap<>();
		result.put("success", update > 0);
		result.put("user", userList);
		return result;
	}

}
