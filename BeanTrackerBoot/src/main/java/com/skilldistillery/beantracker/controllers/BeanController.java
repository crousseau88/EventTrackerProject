package com.skilldistillery.beantracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	 @GetMapping("beans/{id}")
		public Beans listBeansById(@PathVariable Integer id, HttpServletResponse res){
	        Beans comments = beanServ.findById(id);
	        if(comments == null) {
	            res.setStatus(404);
	        }
	        return comments;
	    }
	 
	 @PostMapping("beans")
	    public Beans create(@RequestBody Beans beans, HttpServletResponse res) {
	        Beans created = null;
	        try {
	            created = beanServ.createRoast(beans);
	            res.setStatus(201);
	        } catch (Exception e) {
	            res.setStatus(400);
	            e.printStackTrace();
	        }
	        return created;
	    }
	 
	 @PutMapping("beans/{id}")
		public Beans update(@RequestBody Beans beans, @PathVariable int id, HttpServletResponse res) {
			Beans updated = null;

			try {
				updated = beanServ.updateBeans(beans, id);
			} catch (Exception e) {
				e.printStackTrace();
				res.setStatus(400);
			}
			return updated;
		}
	 
	 @DeleteMapping("beans/{id}")
		public Boolean delete(@PathVariable int id, HttpServletResponse res) {
			Boolean deleted = beanServ.delete(id);
			if (deleted) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
			return deleted;

		}
	 @GetMapping("beans/search/{keyword}")
		public List<Beans> beansByKeyword(@PathVariable String keyword) {
			return beanServ.getBeansByKeyword(keyword);
		}
		

}
