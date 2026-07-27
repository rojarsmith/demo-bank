package example.bank.springboot.basic.injectfromproperties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-02
 */
@PropertySource("classpath:database-${spring.profiles.active}.properties")
@ConfigurationProperties("database")
@Component
@Data
public class DataBaseProperties {

	String driverName = null;

	String url = null;

	String username = null;

	String password = null;

}
