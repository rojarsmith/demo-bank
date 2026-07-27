package example.bank.springboot.basic.jpa;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-06
 */
public interface UserService {

	User getUser(Long id);

	int insertUser(User user);

}
