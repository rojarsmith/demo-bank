package example.bank.springboot.basic.jpa;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-05
 */
public enum SexEnum {
	MALE(1, "Male"), FEMALE(2, "Female");

	int id;
	String name;

	private SexEnum(int id, String name) {
		this.id = id;
		this.name = name;
	}

	public static SexEnum getEnumById(int id) {
		for (SexEnum sex : SexEnum.values()) {
			if (sex.getId() == id) {
				return sex;
			}
		}
		return null;
	}

	public int getId() {
		return id;
	}

}
