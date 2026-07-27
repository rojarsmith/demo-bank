package example.bank.springboot.basic.config;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

/**
 * @author Rojar Smith
 *
 * @date 2021-07-31
 */
@Component
public class BeanPostProcessorConfig implements BeanPostProcessor {

	@Override
	public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("::postProcessBeforeInitialization=" + beanName);
		return bean;
	}

	@Override
	public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("::postProcessAfterInitialization=" + beanName);
		return bean;
	}

}
