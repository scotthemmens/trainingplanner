function MyApp() {}

MyApp.prototype = {

	exercises: ["Pork Bellies", 
				"Kettle Bell Swings", 
				"Whizzies", 
				"Ropes", 
				"Lunges", 
				"Walking Lunges", 
				"Back Lunges", 
				"Goblin Squats", 
				"Bicep Curls", 
				"Press ups", 
				"Frogs", 
				"Sit ups", 
				"Weighted sit ups", 
				"Plate squats", 
				"Squats", 
				"Burpies", 
				"Planks", 
				"Tricep dips", 
				"Box jumps (side to side)"],

	button: $('#getWorkout'),
	routineContainer: $('#routine'),

	init: function() {

		this.routineContainer.hide();
		this.addEventListeners();
		console.log('init');

	},

	addEventListeners: function() {
		var _self = this;
		// Add click here...
		this.button.click(function(){
			_self.render(_self.createRoutine());
		});

		console.log('addEventListeners');
	},

	createRoutine: function() {

		console.log('run');
		var jumbledArray = this.shuffle(this.exercises);
		console.log('jumbledArray ', jumbledArray);

		var routine1 = jumbledArray.slice(0,4);
		var routine2 = jumbledArray.slice(4,8);
		var routine3 = jumbledArray.slice(8,12);

		return {
			routine1: routine1,
			routine2: routine2,
			routine3: routine3
		};

	},

	shuffle: function(o) {

		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	},

	render: function(routine) {
		$('#routine1').html(this.renderRow(routine.routine1));
		$('#routine2').html(this.renderRow(routine.routine2));
		$('#routine3').html(this.renderRow(routine.routine3));
		this.routineContainer.hide();
		this.routineContainer.fadeIn();
		console.log('routine', routine[routine1]);
		this.button.text("Get another");
	},

	renderRow: function(routine) {
		var str = "";

			_.each(routine, function(item) {
  				str += "<li>" + item + "</li>";
		});

		return str;
	}

		// Shuffle Array ///

		// Take first 12

		// Split into 3



};

var myApp = new MyApp();
myApp.init();


