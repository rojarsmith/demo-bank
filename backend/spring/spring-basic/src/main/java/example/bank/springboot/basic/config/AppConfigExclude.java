package example.bank.springboot.basic.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.stereotype.Component;

/**
 * @author Rojar Smith
 *
 * @date 2021-07-31
 */
@ComponentScan(basePackages = { "example.bank.springboot.basic.pojo" }, excludeFilters = {
		@Filter(classes = { Component.class }) })
public class AppConfigExclude {

}
