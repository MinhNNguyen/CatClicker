var num_clicks = [0, 0, 0, 0, 0];

var img_src = ["img/bigcat.jpg",
							 "img/cat.jpg",
							 "img/golden.jpg",
							 "img/samoyed.jpg",
							 "img/shiba.jpg"];

var cat_name = ["Mr. Tiger",
								"Honest Cat",
								"Beautiful in Golden",
								"I am a dog not cat",
								"Who I am Where I am from"]

for (var i = 0; i < num_clicks.length; i++) {
	
	var elem = document.createElement('li');
	elem.textContent = cat_name[i];
	
	elem.addEventListener('click', ( function(num) {
		return function() {
			$('#container .name').html(cat_name[num]);
			$('#container img').attr("src", img_src[num]);
			$('#container img').click(function(e){
				num_clicks[num]++;
				$('#container .result').html("Number of clicks: " + num_clicks[num]);
			});

		$('#container .result').html("Number of clicks: " + num_clicks[num]);

		}
	})(i));
	
	document.getElementById('list').appendChild(elem);
}