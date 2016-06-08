function getQuote() {

	$.ajax('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
	{
		headers: {
			'X-Mashape-Key': 'KOrFaIgvgkmshjpqe8xJh9vqJsE6p1ndukJjsn0lx0JDLhReC7',
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		success: function(response){

			var q = JSON.parse(response);

			$('#words').html(q.quote);
			$('#author').html(q.author);
		}
	});
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

$(document).ready(function() {

	getQuote();

	$("#new").on("click", function() {
		getQuote();
	});

	$("#tweet").on("click", function() {
		openURL('https://twitter.com/intent/tweet?hashtags=quote&related=freecodecamp&text=' + encodeURIComponent('"' + $("#words").html() + '" - ' + $('#author').html()));
	});

});






