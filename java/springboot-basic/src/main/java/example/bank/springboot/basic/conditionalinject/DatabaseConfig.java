package example.bank.springboot.basic.conditionalinject;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;

/**
 * @author Rojar Smith
 *
 * @date 2021-07-31
 */
@Configuration
public class DatabaseConfig {
	@Bean(name = "dataSourceConditional")
	@Conditional(DataSourceConditional.class)
	public DataSource getDataSource() {
		DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
		dataSourceBuilder.driverClassName("org.h2.Driver");
		dataSourceBuilder.url("jdbc:h2:mem:test;DB_CLOSE_DELAY=-1");
		dataSourceBuilder.username("sa");
		dataSourceBuilder.password("");
		return dataSourceBuilder.build();
	}
}
