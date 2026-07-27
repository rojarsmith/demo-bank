package example.bank.springboot.basic.pojo;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import example.bank.springboot.basic.pojo.definition.Device;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-03
 */
@Component
//@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
public class Device1 implements Device {

	@Override
	public String getMacAddress() {
		return this.getClass().getSimpleName() + ": getMacAddress";
	}

}
