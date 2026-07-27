package example.bank.springboot.basic.pojo;

import org.springframework.stereotype.Component;

import example.bank.springboot.basic.pojo.definition.Animal;

/**
 * @author Rojar Smith
 *
 * @date 2021-07-31
 */
@Component
public class Cat implements Animal {

	@Override
	public void use() {
		System.out.println("The Cat " + Cat.class.getSimpleName() + " is for catching mouse.");
	}

}
