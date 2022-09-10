window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	loadAllEvents();
	document.beanForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let beanId = document.beanForm.beanId.value;
		console.log(beanId);
		if (!isNaN(beanId) && beanId > 0) {
			console.log("Bean ID: " + beanId);
			getBean(beanId);
		}
	});

	document.addBeanForm.addBean.addEventListener('click', function(evt) {
		evt.preventDefault();
		console.log('Adding bean');
		let bean = {
			name: addBeanForm.name.value,
			brand: addBeanForm.brand.value
		};
		bean.type = addBeanForm.type.value;
		bean.process = addBeanForm.process.value;
		bean.growingRegion = addBeanForm.growingRegion.value;
		bean.growingAltitude = addBeanForm.growingAltitude.value;
		bean.blendBase = addBeanForm.blendBase.value;
		bean.roastLevel = addBeanForm.roastLevel.value;
		bean.buyAgain = addBeanForm.buyAgain.value;
		bean.rating = addBeanForm.rating.value;
		console.log(bean);
		addNewBean(bean);
	});
	document.deleteById.delete.addEventListener('click', (e) => {
        e.preventDefault();
        let id = document.deleteById.id.value;
        deleteById(id);
    });
    
    document.updateForm.updateBeans.addEventListener('click', updateBeans);
}
function loadAllEvents() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/beans");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				console.log('Bean created')
				displayBeans(JSON.parse(xhr.responseText));
			}
			else {
				console.error('Error loading events: ' + xhr.status);
			}
		}
	};
	xhr.send();
}

function displayBeans(beanList) {
	let tbody = document.querySelector('#beanList>table>tbody');
	tbody.textContent = '';
	for (let bean of beanList) {
		let tr = document.createElement('tr');
		tbody.appendChild(tr);
		let td = document.createElement('td');
		td.textContent = bean.id;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = bean.name;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = bean.brand;
		tr.appendChild(td);
		tr.addEventListener('click', function(evt){
			console.log('Selected bean ' + bean.id);
	});
}
}

	function getBean(beanId) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/beans/' + beanId);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					console.log('Bean found')
					let bean = JSON.parse(xhr.responseText);
					displayBean(bean);
					console.log(bean);
					//getBean(beanId);
				}
				else {
					console.log('Not found');
					displayError('Bean ' + beanId + ' not found.')
				}
			}
		}
		xhr.send();
	}

	function displayError(msg) {
		let dataDiv = document.getElementById('beanData');
		dataDiv.textContent = '';
		dataDiv.textContent = msg;
	}

	function displayBean(bean) {
		let dataDiv = document.getElementById('beanData');
		dataDiv.textContent = '';
		let ul = document.createElement('ul');
		ul.textContent = bean.name;
		dataDiv.appendChild(ul);

		let brand = document.createElement('li');
		brand.textContent = bean.brand;
		ul.appendChild(brand);
		console.log(bean.brand);
		let type = document.createElement('li');
		type.textContent = bean.type;
		ul.appendChild(type);
		console.log(bean.type);
		let process = document.createElement('li');
		process.textContent = bean.process;
		ul.appendChild(process);

		let growingRegion = document.createElement('li');
		growingRegion.textContent = bean.growingRegion;
		ul.appendChild(growingRegion);

		let growingAltitude = document.createElement('li');
		growingAltitude.textContent = bean.growingAltitude;
		ul.appendChild(growingAltitude);

		let blendBase = document.createElement('li');
		blendBase.textContent = bean.blendBase;
		ul.appendChild(blendBase);

		let roastLevel = document.createElement('li');
		roastLevel.textContent = bean.roastLevel;
		ul.appendChild(roastLevel);
	}

	function addNewBean(bean) {
		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'api/beans');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 201) {
					console.log('Bean created')
					displayBean(JSON.parse(xhr.responseText));
				}
				else if (xhr.status === 400) {
					displayError('Invalid data');
				}
				else {
					displayError('Error creating bean: ' + xhr.status);
				}
			}
		}
		xhr.setRequestHeader("Content-type", "application/json");
		let beanJson = JSON.stringify(bean);
		xhr.send(beanJson);
	}
	
	function deleteById(id) {
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'api/beans/' + id)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let dataDiv = document.getElementById('id');
                dataDiv.textContent = 'Bean has been deleted';
            }else {
                console.log("Bean not found");
                let dataDiv = document.getElementById('beanData');
                dataDiv.textContent = '';
                let notFoundDiv = document.createElement('div');
                dataDiv.appendChild(notFoundDiv);
            }
        };
    }
    xhr.send();
}

function updateBeans(e) {
    e.preventDefault();
    let bean = {
                
        name:  document.updateForm.name.value,
        brand: document.updateForm.brand.value,
        type: document.updateForm.type.value,
        process: document.updateForm.process.value,
        growingRegion: document.updateForm.growingRegion.value,
        growingAltitude: document.updateForm.growingAltitude.value,
        blendBase: document.updateForm.blendBase.value,
        roastLevel: document.updateForm.roastLevel.value,
        buyAgain: document.updateForm.buyAgain.value,
        rating: document.updateForm.rating.value
     }   
        
    
    console.log(bean)
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', 'api/beans/' + document.updateForm.id.value, true);
    
    xhr.setRequestHeader("Content-type", "application/json");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status == 200 || xhr.status == 201) {
                let ritual = JSON.parse(xhr.responseText);
                console.log(bean);
                displayBean(bean);
            }
            else {
                console.error("POST request failed.");
                console.error(xhr.status + ": " + xhr.responseText);
            }
        }
    };
    xhr.send(JSON.stringify(bean));
}
