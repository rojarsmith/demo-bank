package example.bank.springboot.basic.profileinject;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

/**
 * @author Rojar Smith
 *
 * @date 2021-07-31
 */
@Configuration
public class DatabaseConfig {
	@Bean(name = "dataSource1")
	@Profile("dev")
	public DataSource getDataSource1() {
		DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
		dataSourceBuilder.driverClassName("org.h2.Driver");
		dataSourceBuilder.url("jdbc:h2:mem:test;DB_CLOSE_DELAY=-1");
		dataSourceBuilder.username("sa1");
		dataSourceBuilder.password("");
		return dataSourceBuilder.build();
	}
	
	@Bean(name = "dataSource2")
	@Profile("test")
	public DataSource getDataSource2() {
		DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
		dataSourceBuilder.driverClassName("org.h2.Driver");
		dataSourceBuilder.url("jdbc:h2:mem:test;DB_CLOSE_DELAY=-1");
		dataSourceBuilder.username("sa2");
		dataSourceBuilder.password("");
		return dataSourceBuilder.build();
	}
	
}
