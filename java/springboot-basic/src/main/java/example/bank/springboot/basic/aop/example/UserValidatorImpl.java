package example.bank.springboot.basic.aop.example;

import org.springframework.stereotype.Service;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-04
 */
@Service
public class UserValidatorImpl implements UserValidator {

	@Override
	public boolean validate(User user) {
		System.out.println("Introduction: " + UserValidator.class.getSimpleName());
		return user != null;
	}

}
