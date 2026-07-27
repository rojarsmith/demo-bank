package example.bank.springboot.basic.aop.example;

import org.springframework.stereotype.Service;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-04
 */
@Service
public class UserServiceImpl implements UserService {
	
	@Override
	public void printUser(User user) {
		if (user == null) {
			System.out.println("Check user is null...");
			throw new RuntimeException("Check user is null...");
		}
		System.out.println("ID:" + user.getId());
		System.out.println("User Name:" + user.getUserName());
		System.out.println("Note:" + user.getNote());
	}
	
}
