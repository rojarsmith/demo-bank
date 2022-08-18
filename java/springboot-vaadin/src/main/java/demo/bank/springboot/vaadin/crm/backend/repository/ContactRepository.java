package demo.bank.springboot.vaadin.crm.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import demo.bank.springboot.vaadin.crm.backend.entity.Contact;

/**
 * @author Rojar Smith
 *
 * @date 2022 Aug 18
 **/
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
