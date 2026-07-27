package example.bank.springboot.basic.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * @author Rojar Smith
 *
 * @date 2021-07-31
 */
@Configuration
@ComponentScan(basePackages = { "example.bank.springboot.basic.pojo" })
public class AppConfigComponent {

}
