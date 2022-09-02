package com.skilldistillery.beantracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.beantracker.entities.Beans;
import com.skilldistillery.beantracker.services.BeanService;

@RestController
@RequestMapping("api")
public class BeanController {
	
	@Autowired
	private BeanService beanServ;
	
	@GetMapping("beans")
	public List<Beans> index() {
		return beanServ.index();
	}

}
