package demo.bank.springboot.flyway;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

/**
 * @author Rojar Smith
 *
 * @date 2022 Dec 31
 */
@Component
public class BackendApplicationRunner implements ApplicationRunner {

	private static final Logger logger = LoggerFactory.getLogger(ApplicationRunner.class);

	@Override
	public void run(ApplicationArguments args) throws Exception {
		logger.info("Fine");
	}

}
