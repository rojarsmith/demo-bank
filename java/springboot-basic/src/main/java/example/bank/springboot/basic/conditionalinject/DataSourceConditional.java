package example.bank.springboot.basic.conditionalinject;

import org.springframework.context.annotation.Condition;
import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.env.Environment;
import org.springframework.core.type.AnnotatedTypeMetadata;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-03
 */
public class DataSourceConditional implements Condition {

	@Override
	public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
		Environment env = context.getEnvironment();
		boolean v = true;
		v = v & env.containsProperty("database.driverName");
		return v;
//		return true;
	}

}
