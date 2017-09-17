var userArray = [

{
	name: "Yan Hong",
	age: 26,
	school: "SFU",
	tags: ["HTML", "CSS", "JavaScript"]
},

{
	name: "Ben Sun",
	age: 30,
	school: "SFU",
	tags: ["UIUX", "Graphics Design"]
}

];




$('#search-btn').click(function(e) {

	$('#user-container').html('');
	var searchVal = $('#search-input').val();

	for (var i = 0; i < userArray.length; i++) {

		if (searchVal == userArray[i].name) {

			var userDiv = $('<div>').addClass('user');


			$('<h1>').text(userArray[i].name).appendTo(userDiv);
			$('<h2>').text(userArray[i].age).appendTo(userDiv);
			$('<h2>').text(userArray[i].school).appendTo(userDiv);

			var p = $('<p>');

			for (var j = 0; j < userArray[i].tags.length; j++) {
				$('<span>').text(userArray[i].tags[j]).appendTo(p);	
			}
			
			$(p).appendTo(userDiv);
			$(userDiv).appendTo($('#user-container'));
		}
	}
}
)

// function searchFeature(userObj, query) {
// 	return !query || new RegExp(query,"i").test(user.skills) ? user:false;
// }



// $('#search-input').keypress(function() {
// 	var userEntry = $('#search-input').val();
// 	alert('user entered ' + userEntry);
// })


/*
<div class="user">
	<h1>Yan Hong</h1>
	<h2>26</h2>
	<h2>SFU</h2>
	<p>
		<span>HTML</span>				
		<span>CSS</span>
		<span>JavaScript</span>
	</p>
</div>
*/


