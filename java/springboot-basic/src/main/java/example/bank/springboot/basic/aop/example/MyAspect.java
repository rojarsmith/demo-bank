package example.bank.springboot.basic.aop.example;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.DeclareParents;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.core.annotation.Order;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-04
 */
@Order(1)
@Aspect
public class MyAspect {

	@DeclareParents(value = "example.bank.springboot.basic.aop.example.UserServiceImpl", defaultImpl = UserValidatorImpl.class)
	public UserValidator userValidator;
	
	@Pointcut("execution (* example.bank.springboot.basic.aop.example.UserServiceImpl.printUser(..))")
	public void pointCut() {
	}

	@Before("pointCut() && args(user)")
	public void before(JoinPoint jp, User user) {
		@SuppressWarnings("unused")
		Object[] args = jp.getArgs();
		System.out.println("before ....");
	}

	@Around("pointCut()")
	public Object around(ProceedingJoinPoint jp) throws Throwable {
		System.out.println("around before....");
		Object proceed = jp.proceed();
		System.out.println("around after....");
		return proceed;
	}

	@After("pointCut()")
	public void after() {
		System.out.println("after ....");
	}

	@AfterReturning("pointCut()")
	public void afterReturningbefore() {
		System.out.println("afterReturning ....");
	}

	@AfterThrowing("pointCut()")
	public void afterThrowing() {
		System.out.println("afterThrowing ....");
	}

}
