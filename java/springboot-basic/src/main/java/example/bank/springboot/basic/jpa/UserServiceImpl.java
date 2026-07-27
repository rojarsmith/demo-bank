package example.bank.springboot.basic.jpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-06
 */
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	JpaUserRepository jpaUserRepository;

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, timeout = 1)
	public User getUser(Long id) {
		return jpaUserRepository.getById(id);
	}

	@Override
	@Transactional(isolation = Isolation.SERIALIZABLE, propagation = Propagation.REQUIRED)
	public int insertUser(User user) {
		jpaUserRepository.save(user);
		return 1;
	}

}
