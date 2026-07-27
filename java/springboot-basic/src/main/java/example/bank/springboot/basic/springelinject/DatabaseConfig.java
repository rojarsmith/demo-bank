package example.bank.springboot.basic.springelinject;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Configuration;

/**
 * @author Rojar Smith
 *
 * @date 2021-07-31
 */
@Configuration
public class DatabaseConfig {

	@Value("#{T(System).currentTimeMillis()}")
	Long initTime = null;

	@Value("#{9.3E3}")
	double d;

	@Value("#{device.name?.toUpperCase()}")
	String name;

	public DataSource getDataSource1() {
		DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
		dataSourceBuilder.driverClassName("org.h2.Driver");
		dataSourceBuilder.url("jdbc:h2:mem:test;DB_CLOSE_DELAY=-1");
		dataSourceBuilder.username("sa1");
		dataSourceBuilder.password("");
		return dataSourceBuilder.build();
	}

}
