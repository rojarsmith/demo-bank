package example.bank.springboot.basic.xmlinject;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;

/**
 * @author Rojar Smith
 *
 * @date 2021-07-31
 */
public class DatabaseConfig {

	public DataSource getDataSource1() {
		DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
		dataSourceBuilder.driverClassName("org.h2.Driver");
		dataSourceBuilder.url("jdbc:h2:mem:test;DB_CLOSE_DELAY=-1");
		dataSourceBuilder.username("sa1");
		dataSourceBuilder.password("");
		return dataSourceBuilder.build();
	}

}
