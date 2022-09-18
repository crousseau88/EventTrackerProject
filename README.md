# Event Tracker Project


## Overview
Although this is titled as an event tracker it is far from being an application that tracks events. Since we were given the option to track data of just about anything I figured what better way than to track my first true love, coffee. As an avid coffee drinker, a connoisseur of sorts, I am often trying new roasts (beans) from a variety of roasters and growing regions across the globe. As one could imagine keeping track of what you have drank and enjoyed can be difficult especially if at an event tasting or out trying a new cafe that you may not have the beans at home. My goal for this project was to build an application that resembles Beer Advocate or Untappd but for coffee. With that being said this is very bare bones as is with a single table. I hope throughout the coming weeks as we work to build upon this project I can achieve my goal of making a basic coffee tracking app I can use to reference past roasts I have enjoyed or not enjoyed. I see myself using this as I shop for coffee since I tend to forget which beans I have tried as there have been so many.


## REST Endpoints

| HTTP Verb | URI                      | Request Body            | Response Body  | Purpose |
|-----------|--------------------------|-------------------------|----------------|---------|
| GET       | `/api/beans`           |                         | List of beans| **List** or **collection** endpoint |
| GET       | `/api/beans/{beanId}`|                         | Single bean  | **Retrieve** endpoint |
| GET       | `/api/beans/{keyword}`|                         | List of beans  | **Retrieve** endpoint |
| POST      | `/api/beans`           | JSON for a new Bean   | Created bean | **Create** endpoint |
| PUT       | `/api/beans/{beanId}`| JSON for updating Bean| Updated bean | **Replace** endpoint |
| DELETE    | `/api/beans/{beanId}`|                         |                | **Delete** route |

* JSON for Creating a new Roast (bean)



```
{

        "name": "Name Of Coffee",
        "brand": "Brand or Roaster",
        "type": "Blend or SIngle Origin",
        "process": "Washed, Honey, Natural, etc.",
        "growingRegion": "Indonesia, Latin America, Africa, Mexico",
        "growingAltitude": 1500,
        "blendBase": "What Beans in Blend",
        "roastLevel": "Light, Medium, Dark",
        "buyAgain": false,
        "rating": 3.95
    }
```
* GET List All Beans
```
http://localhost:8082/api/beans/
```
* GET Find Beans by ID

```
http://localhost:8082/api/beans/2
```
* GET Find Beans by Keyword

```
http://localhost:8082/api/beans/search/Ethiopia
```
* POST Create a New Roast

```  
http://localhost:8082/api/beans
```
* PUT Update a Roast

```  
http://localhost:8082/api/beans/2
```
* DELETE Delete a Roast

```
http://localhost:8082/api/beans/7
```  

### http://34.206.35.233:8080/BeanTrackerBoot/

## Technologies Used

* Java
* MySQL Workbench
* Postman
* Spring Data JPA
* Spring Boot
* Spring MVC
* JavaScript
* JSON
* AJAX
* DOM
* XHR
* AWS-EC2
* Angular
* TypeScript
* CSS
* HTML
