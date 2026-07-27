package example.bank.springboot.basic.aop;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-03
 */
public class HelloServiceImpl implements HelloService {

	@Override
	public void sayHello(String name) {
		if (name == null || name.trim() == "") {
			throw new RuntimeException("parameter is null!!");
		}
		System.out.println("hello " + name);
	}

}
