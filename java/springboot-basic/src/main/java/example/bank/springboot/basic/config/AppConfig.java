package example.bank.springboot.basic.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import example.bank.springboot.basic.pojo.User;

/**
 * @author Rojar Smith
 *
 * @date 2021-07-30
 */
@Configuration
public class AppConfig {

	@Bean(name = "user")
	public User initUser() {
		User user = new User();

		user.setId(1L);
		user.setUserName("user_name_l");
		user.setNote("note_l");
		return user;
	}

}
