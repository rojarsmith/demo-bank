package example.bank.springboot.basic.jpa;

import javax.persistence.AttributeConverter;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-05
 */
public class SexConverter implements AttributeConverter<SexEnum, Integer> {

	@Override
	public Integer convertToDatabaseColumn(SexEnum attribute) {
		return attribute.getId();
	}

	@Override
	public SexEnum convertToEntityAttribute(Integer dbData) {
		return SexEnum.getEnumById(dbData);
	}

}
