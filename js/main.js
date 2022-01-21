$(function () {
	$(".dream")
		.delay(500)
		.fadeIn(1500, function () {
			$(".build").fadeIn(1500, function () {
				$(".grow").fadeIn(1500, function () {
					$(".seedling")
						.removeClass("seedling")
						.addClass("typewriter");
					$(".coming-soon").delay(3500).fadeIn(1500);
				});
			});
		});
});
