package example.bank.springboot.basic.beanlifecycle;

import org.springframework.stereotype.Component;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-02
 */
@Component
public class BaseBean1 implements BaseBean {

	@Override
	protected void finalize() throws Throwable {
		System.out.println("[" + this.getClass().getSimpleName() + "] Call finalize");
	}

	public BaseBean1() {
		System.out.println("[" + this.getClass().getSimpleName() + "] Call constructor");
	}

	@Override
	public void run() {
		System.out.println("[" + this.getClass().getSimpleName() + "] Call run");
	}

}
