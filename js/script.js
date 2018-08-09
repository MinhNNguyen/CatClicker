var no_of_clicks_1 = 0;
var no_of_clicks_2 = 0;

$('#1 .name').html($('#1 img').attr("alt"));
$('#2 .name').html($('#2 img').attr("alt"));


$('#1 img').click(function(e) {
	$('#1 .result').html("Number of clicks: " + ++no_of_clicks_1);
});


$('#2 img').click(function(e) {
	$('#2 .result').html("Number of clicks: " + ++no_of_clicks_2);
});