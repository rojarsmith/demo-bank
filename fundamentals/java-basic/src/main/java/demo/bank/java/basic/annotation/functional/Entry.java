package demo.bank.java.basic.annotation.functional;

/**
 * @author Rojar Smith
 *
 * @date 2022 Nov 1
 */
public class Entry {
	public static void main(String[] args) {
		Say say = p -> p + ", hello.";
		System.out.println("test functional:" + say.hallo("Rojar"));
		
		// Without functional
		Say say2 = new Say() {
			@Override
			public String hallo(String message) {
				return message + ", hello.";
			}
		};
		
		System.out.println("test functional:" + say2.hallo("Rojar"));
	}
}
