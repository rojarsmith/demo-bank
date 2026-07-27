package example.bank.springboot.basic.beanscope;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-03
 */
@Component
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
//@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
public class Device {

	public String getMacAddress() {
		return this.getClass().getSimpleName() + ": getMacAddress";
	}

}
