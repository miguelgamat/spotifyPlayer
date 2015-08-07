

$('#search-button').on('click', function(event){
	event.preventDefault();
	console.log("request before to the spotify database");

	$.get('https://api.spotify.com/v1/search?type=track&query=' + $('#search-input').val(), function(songs){
		var song = songs.tracks.items[0]
		console.log(song);

		var nameTrack = song.name
		var nameGroup = song.artists[0].name
		var albumPicture = song.album.images[0].url
		var preview_url = song.preview_url

		$('.title-of-song').text(nameTrack);
		$('.artist').text(nameGroup);

		console.log(albumPicture);
		console.log(nameGroup);
		$('.showCover').html('<img src=' + '"' + albumPicture + '"'+ '>');
		// $('.showCover').attr('src',albumPicture)
		$('#songToPlay').attr('src', preview_url);

	});

});


$('#play-button').on('click', function(event){
	event.preventDefault();
	$('#play-button').toggleClass('playing');
	// play audio
	if ($('#play-button').hasClass('playing')) {
		$('#songToPlay').trigger('play');
	} else{
		// pause audio
		$('#songToPlay').trigger('pause');
	};
});


function printTime () {
  var current = $('#songToPlay').prop('currentTime');
  console.debug('Current time: ' + current);
}

// Have printTime be called when the time is updated
$('#songToPlay').on('timeupdate', printTime);






