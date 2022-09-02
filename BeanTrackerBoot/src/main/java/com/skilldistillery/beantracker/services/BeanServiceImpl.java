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


}