package example.bank.springboot.basic.pojo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

/**
 * @author Rojar Smith
 *
 * @date 2021-07-31
 */
@Component("userComponent")
@Getter
@Setter
public class UserComponent {

	@Value("2")
	private Long id;
	@Value("user_name_2")
	private String userName;
	@Value("note_2")
	private String note;

}
