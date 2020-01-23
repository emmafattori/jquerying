$('document').ready(function(){
	$('.press_releases').hide()
	// Function to show the sub-menu on hover

	$( '.press' ).on('mouseenter', function(){
		$('.press_releases').show()
	})

	// $('.press').on('mouseleave', function(){
	// 	$('.press_releases').hide()
	// })


})