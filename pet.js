function Pet(name) {
	this.name = name;
	this.hunger = 0;
	this.fun = 100;

	this.feed = function(food) {
		// take in amount of food entered in field
		this.hunger -= food;
		this.fun -= food / 2;
		if (this.fun <= 0) {
			this.fun = 0;
			}
		if (this.hunger <= 0) {
			this.hunger = 0;
			}
		};
	

	this.play = function(fun) {
		//take in amount of fun entered in field
		this.fun += fun;
		this.hunger += fun / 2;
		if (this.hunger <= 0) {
			this.hunger = 0;
			}
		if (this.fun <= 0) {
			this.fun = 0;
			}
	};
}
