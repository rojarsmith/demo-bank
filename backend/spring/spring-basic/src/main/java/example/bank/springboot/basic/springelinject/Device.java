package example.bank.springboot.basic.springelinject;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-03
 */
@Component
public class Device {

	@Value("#{'Device1 Name'}")
	public String name;

}
