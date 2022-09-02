package com.skilldistillery.beantracker.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.skilldistillery.beantracker.entities.Beans;

@Service
public interface BeanService {
	
	List<Beans> index();
}
