var userArray = [

{
	name: "Titos",
	type:"Ethnic",
	Address:"122 Walter Hardwick Ave 305 Vancouver",
	image:"img/1.jpg"
},


var userArray = [

{
	name: "Titos",
	type:"Ethnic",
	Address:"122 Walter Hardwick Ave 305 Vancouver",
	image:"img/1.jpg"
},

{
	name: "Hank's Dairy Bar",
	type:"Fast food",
	Address:"3308 Ash St Vancouver"
}

],

{
	name: "D'Wine Restaurant",
	type:"Fast casual",
	Address:"2485 Broadway W 414 Vancouver"
},

{
	name: "Basil Doc's Pizza Florida",
	type:"Casual dining",
	Address:"275 28th Ave E Vancouver"
},

{
	name: "Samuel's Memorable",
	type:"Fine dining",
	Address:"106 588 45th Ave W Vancouver"
},

{
	name: "Louie's Chophouse",
	type:"Barbecue",
	Address:"563 Union St Vancouver"
},

{
	name: "Wendal Wendonie",
	type:"Brasseries",
	Address:"3007 8th Ave W Vancouver"
},

{
	name: "Zodiac Cafe",
	type:"Bistro",
	Address:"110 2255 W 8th Vancouver"
},

{
	name: "Sweet Addication",
	type:"Buffet and smogasbord",
	Address:"408 2260 W 10th Vancouver"
};
]

$('#search-btn').click(function(e) {

	$('#user-container').html('');
	var searchVal = $('#search-input').val();

	for (var i = 0; i < userArray.length; i++) {

		if (searchVal == userArray[i].name) {

			var userDiv = $('<div background="./img/' + $img + '">').addClass('user');


			$('<h1>').text(userArray[i].name).appendTo(userDiv);
			$('<h2>').text(userArray[i].type).appendTo(userDiv);
			$('<h2>').text(userArray[i].Address).appendTo(userDiv);
			$('<img>').text(userArray[i].image.appendTo(userDiv);
<img src=''>
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


