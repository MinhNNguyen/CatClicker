/* ======= Model ======= */

var model = {
	currentCat: null,
	cats: 
		[
			{
				name: 'This cat is sure pretty cute',
				imgSrc: 'img/bigcat.jpg',
				clickCount: 0
			},
			{
				name: 'Honest Cat',
				imgSrc: 'img/cat.jpg',
				clickCount: 0
			},
			{
				name: 'Beautiful in Golden',
				imgSrc: 'img/golden.jpg',
				clickCount: 0
			},
			{
				name: 'I am a dog not cat',
				imgSrc: 'img/samoyed.jpg',
				clickCount: 0
			},
			{
				name: 'Who I am Where I am from',
				imgSrc: 'img/shiba.jpg',
				clickCount: 0
			}
		]
};


/* ======= Octopus ======= */

var octopus = {
	init: function() {
		model.currentCat = model.cats[0];
		view.listView.init();
		view.catView.init();
	},

	getCats: function() {
		return model.cats;
	},

	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	incrementCounter: function() {
		model.currentCat.clickCount++;
		view.catView.render();
	}

};


/* ======= View ======= */

var view = {
	listView : {
		
		init: function() {
			this.catList = document.getElementById('list');
			this.render();
		},

		render: function() {
			var cat, i, elem;
			var cats = octopus.getCats();
			this.catList.innerHTML = '';

			// Loop over the cats
			for (i = 0; i < cats.length; i++) {
				
				cat = cats[i];
				
				// Make a new list cat item
				elem = document.createElement('li');
				elem.textContent = cat.name;

				// Setting onClick event on the list item
				elem.addEventListener('click', (function(catCopy) {
					return function() {
						octopus.setCurrentCat(catCopy);
						view.catView.render();
					};
				})(cat));

				this.catList.appendChild(elem);

			}
		}
	},

	catView : {
		
		init: function() {
			// Store pointers to the DOM elements for easy access
			this.catName = document.getElementById('name');
			this.image = document.getElementById('img');
			this.result = document.getElementById('result');

			this.image.addEventListener('click', function(){
				octopus.incrementCounter();
			});
			this.render();
		},

		render: function() {
			// Update DOM elements with the value of the current Cat
			var current = octopus.getCurrentCat();
			this.catName.textContent = current.name;
			this.image.src = current.imgSrc;
			this.result.textContent = current.clickCount;


		}
	}

};
	
// Let it go
octopus.init();





/*for (var i = 0; i < num_clicks.length; i++) {
	
	var elem = document.createElement('li');
	elem.textContent = cat_name[i];
	
	elem.addEventListener('click', ( function(num) {
		return function() {
			$('#container .name').html(cat_name[num]);
			$('#container img').attr("src", img_src[num]);
			$('#container img').click(function(e){
				num_clicks[num]++;
				$('#container .result').html("Number of clicks: " 
				 num_clicks[num]);
			});

		$('#container .result').html("Number of clicks: " 
			+ num_clicks[num]);

		}
	})(i));
	
	document.getElementById('list').appendChild(elem);
// }*/