package com.skilldistillery.beantracker.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.beantracker.entities.Beans;

@Service
public interface BeanService {
	
	List<Beans> index();
	
	Beans findById(int id);
	
	Beans createRoast(Beans bean);

	boolean delete(int id);

	Beans updateBeans( Beans bean, Integer beanId);

	

	List<Beans> getBeansByKeyword(String keyword);
}
