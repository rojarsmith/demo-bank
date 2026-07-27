package example.bank.springboot.basic.aop;

//import org.springframework.cglib.core.DebuggingClassWriter;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = { "example.bank.springboot.basic.aop" })
public class ApplicationAop {

	public static void main(String[] args) {
		// Generate dynamic class, not work with JDK 11.
//		System.setProperty(DebuggingClassWriter.DEBUG_LOCATION_PROPERTY, "D:\\\\Code");
//		System.setProperty("java.lang.ProxyGenerator.saveGeneratedFiles", "true");
//		System.getProperties().put("java.lang.ProxyGenerator.saveGeneratedFiles", true);

		// Work with JDK 11
		// -Djdk.proxy.ProxyGenerator.saveGeneratedFiles=true
		HelloService helloService = new HelloServiceImpl();
		HelloService proxy = (HelloService) ProxyBean.getProxyBean(helloService, new InterceptorImpl());
		proxy.sayHello("World");
		System.out.println("[" + ApplicationAop.class.getSimpleName() + "] ");
	}

}
