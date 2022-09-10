package com.skilldistillery.beantracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.beantracker.entities.Beans;
import com.skilldistillery.beantracker.repositories.BeanRepository;

@Service
public class BeanServiceImpl implements BeanService {
	
	@Autowired
	private BeanRepository beanRepo;

	@Override
	public List<Beans> index() {
		return beanRepo.findAll();
	}

	public Beans findById(int id) {
		if(! beanRepo.existsById(id)) {
			return null;
		}
		return beanRepo.findById(id);
	}

	@Override
	public Beans createRoast( Beans bean) {
		
		return beanRepo.saveAndFlush(bean);
	}

	@Override
	public boolean delete(int id) {
		beanRepo.deleteById(id);
		return !beanRepo.existsById(id);
	}

	@Override
	public Beans updateBeans(Beans beans, Integer beanId) {
		beans.setId(beanId);

		
		return beanRepo.saveAndFlush(beans);
	}

	@Override
	public List<Beans> getBeansByKeyword(String keyword) {
		keyword = "%" + keyword + "%" ;
		return beanRepo.findByBrandIgnoreCaseLikeOrGrowingRegionIgnoreCaseLike(keyword, keyword);
	}
}