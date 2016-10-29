var myVar;


function Controller(model) {

	this.addPet = function(name) {
		var p = new Pet(name);
		model.addPet(p);
		return p;
	}

	this.playWithPet = function(name, amount) {
		//set limit for happiness
		var p = model.getPetByName(name);
		p.play(amount);
		return p;
	}

	this.feedPet = function(name, amount) {
		//set limit for food
		var p = model.getPetByName(name);
		p.feed(amount);
		return p;
	}

	this.getAllPets = function() {
		return model.getAllPets();
	}

	this.decayInterval = function(name) {
		setInterval(function() {
		var p = model.getPetByName(name);
		p.hunger -= -5;
		p.play -= -5;
		model.getAllPets();
		}, 5000); 
	}


}
