package example.bank.springboot.basic.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-06
 */
public interface JpaUserRepository extends JpaRepository<User, Long> {

}
