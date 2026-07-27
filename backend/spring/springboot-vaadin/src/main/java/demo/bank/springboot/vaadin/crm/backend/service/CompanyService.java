package demo.bank.springboot.vaadin.crm.backend.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import demo.bank.springboot.vaadin.crm.backend.entity.Company;
import demo.bank.springboot.vaadin.crm.backend.repository.CompanyRepository;

/**
 * @author Rojar Smith
 *
 * @date 2022 Aug 18
 **/

@Service
public class CompanyService {
	private CompanyRepository companyRepository;

	public CompanyService(CompanyRepository companyRepository) {
		this.companyRepository = companyRepository;
	}

	public List<Company> findAll() {
		return companyRepository.findAll();
	}

	public Map<String, Integer> getStats() {
		HashMap<String, Integer> stats = new HashMap<>();
		findAll().forEach(company -> stats.put(company.getName(), company.getEmployees().size()));
		return stats;
	}

}
