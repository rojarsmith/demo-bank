package example.bank.springboot.basic.jpa;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

/**
 * @author Rojar Smith
 *
 * @date 2021-08-05
 */
@Entity(name = "user")
@Table(name = "t_user")
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@Column(name = "user_name")
	String userName;
	
	String note;
	
	@Convert(converter = SexConverter.class)
	SexEnum Sex;
	
}
