var no_of_clicks = 0;

$('#cat-pic').click(function(e) {
	no_of_clicks = no_of_clicks + 1;
	$('#result').html("Number of clicks: " + no_of_clicks);
});