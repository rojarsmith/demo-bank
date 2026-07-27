package example.bank.springboot.basic.jpa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-08
 */
@Service
public class UserBatchServiceImpl implements UserBatchService {

	@Autowired
	UserService userService;

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public int insertUsers(List<User> userList) {
		int count = 0;
		for (User user : userList) {
			count += userService.insertUser(user);
		}
		return count;
	}

}
