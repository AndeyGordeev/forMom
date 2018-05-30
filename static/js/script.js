$(document).ready(function() {
    $('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });

    $(".nav-link").click(function() {
	    $(".nav-link").removeClass('active');
	});
});