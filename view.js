function View(controller) {

	this.createPetHTML = function(pet) {
		var $button = $("<button>Play!</button>");
		$button.attr("id", "play" + pet.name);
		
		var $button2 = $("<button>Feed!</button2>");
		$button2.attr("id", "feed" + pet.name);

		var $input = $("<input type ='text' id='amount'>Amount</input>");
		$input.attr("id", "amount" + pet.name);


		// var self = this;
		// $button.click(function() {
		// 	controller.playWithPet(pet.name, 10);
		// 	self.showAllPets();
		// });

		$button.click(function() {
			controller.playWithPet(pet.name, parseFloat($('#amount' + pet.name).val())
				);
			this.showAllPets();
		}.bind(this));

		$button2.click(function(){
			controller.feedPet(pet.name, parseFloat($('#amount' + pet.name).val())
				);
			this.showAllPets();
		}.bind(this));

		var $pet = $("<p>" + "pet name: " + pet.name + "<br>hunger: " + pet.hunger + "<br>fun: " + pet.fun + "</p>");

		$pet.append($button);
		$pet.append($button2);
		$pet.append($input);
		return $pet;

	};

	this.showAllPets = function() {
		$('#output').html("");
		var allPets = controller.getAllPets();
		for(var pet of allPets) {
			var petHTML = this.createPetHTML(pet);
			$('#output').append(petHTML);
		}
	};

	this.createPet = function() {
		var name = $('#petname').val();
		controller.addPet(name);
		controller.decayInterval(name);
		this.showAllPets();
	}




}
