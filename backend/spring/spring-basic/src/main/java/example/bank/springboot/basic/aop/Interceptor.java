package example.bank.springboot.basic.aop;

import java.lang.reflect.InvocationTargetException;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-03
 */
public interface Interceptor {
	
	public boolean before();
	
	public void after();
	
	public Object around(Invocation invocation) throws InvocationTargetException, IllegalAccessException;
	
	public void afterReturning();
	
	public void afterThrowing();
	
	boolean useAround();
	
}
