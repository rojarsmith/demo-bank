package example.bank.springboot.basic.jpa;

import java.util.List;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-08
 */
public interface UserBatchService {

	int insertUsers(List<User> userList);

}
