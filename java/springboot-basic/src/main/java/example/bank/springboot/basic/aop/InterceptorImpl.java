package example.bank.springboot.basic.aop;

import java.lang.reflect.InvocationTargetException;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-03
 */
public class InterceptorImpl implements Interceptor {

	@Override
	public boolean before() {
		System.out.println("before ......");
		return true;
	}

	@Override
	public boolean useAround() {
		return true;
	}

	@Override
	public void after() {
		System.out.println("after ......");
	}

	@Override
	public Object around(Invocation invocation) throws InvocationTargetException, IllegalAccessException {
		System.out.println("around before ......");
		Object obj = invocation.proceed();
		System.out.println("around after ......");
		return obj;
	}

	@Override
	public void afterReturning() {
		System.out.println("afterReturning ......");
	}

	@Override
	public void afterThrowing() {
		System.out.println("afterThrowing ......");
	}

}
