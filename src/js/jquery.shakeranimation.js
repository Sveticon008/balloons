$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.tour-card__side_front').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('tour-card__side_animated')
			} else {
                self.removeClass('tour-card__side_animated')
            }
		});
	});
});