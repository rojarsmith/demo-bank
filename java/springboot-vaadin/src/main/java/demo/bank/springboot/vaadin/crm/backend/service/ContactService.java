package demo.bank.springboot.vaadin.crm.backend.service;

import org.springframework.stereotype.Service;

import demo.bank.springboot.vaadin.crm.backend.entity.Contact;
import demo.bank.springboot.vaadin.crm.backend.repository.CompanyRepository;
import demo.bank.springboot.vaadin.crm.backend.repository.ContactRepository;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * @author Rojar Smith
 *
 * @date 2022 Aug 18
 **/
@Service
public class ContactService {
	private static final Logger LOGGER = Logger.getLogger(ContactService.class.getName());
	private ContactRepository contactRepository;
	private CompanyRepository companyRepository;

	public ContactService(ContactRepository contactRepository, CompanyRepository companyRepository) {
		this.contactRepository = contactRepository;
		this.companyRepository = companyRepository;
	}

	public List<Contact> findAll() {
		return contactRepository.findAll();
	}

	public long count() {
		return contactRepository.count();
	}

	public void delete(Contact contact) {
		contactRepository.delete(contact);
	}

	public void save(Contact contact) {
		if (contact == null) {
			LOGGER.log(Level.SEVERE, "Contact is null. Are you sure you have connected your form to the application?");
			return;
		}
		contactRepository.save(contact);
	}
}
