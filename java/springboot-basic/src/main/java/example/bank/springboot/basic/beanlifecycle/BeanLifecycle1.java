package example.bank.springboot.basic.beanlifecycle;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-02
 */
@Component
public class BeanLifecycle1 implements BeanLifecycle, BeanNameAware, BeanFactoryAware, ApplicationContextAware,
		InitializingBean, DisposableBean {

	private BaseBean baseBean = null;

	public BeanLifecycle1(@Autowired @Qualifier("baseBean1") BaseBean baseBean) {
		this.baseBean = baseBean;
	}

	@Override
	public void run() {
		System.out.println("[" + this.getClass().getSimpleName() + "] Call run");
		baseBean.run();
	}

	@Override
	public void setBeanName(String name) {
		System.out.println("[" + this.getClass().getSimpleName() + "] Call setBeanName");
	}

	@Override
	public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
		System.out.println("[" + this.getClass().getSimpleName() + "] Call setBeanFactory");
	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		System.out.println("[" + this.getClass().getSimpleName() + "] Call setApplicationContext");
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		System.out.println("[" + this.getClass().getSimpleName() + "] Call afterPropertiesSet");
	}

	@PostConstruct
	public void init() {
		System.out.println("[" + this.getClass().getSimpleName() + "] Call @PostConstruct");
	}

	@PreDestroy
	public void destroy1() {
		System.out.println("[" + this.getClass().getSimpleName() + "] Call @PreDestroy");
	}

	@Override
	public void destroy() throws Exception {
		System.out.println("[" + this.getClass().getSimpleName() + "] Call destroy");
	}

}
