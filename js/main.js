$(function () {
	$(".dream")
		.delay(500)
		.fadeIn(1500, function () {
			$(".build").fadeIn(1500, function () {
				$(".grow").fadeIn(1500, function () {
					$(".seedling").animate(
						{ width: "toggle" },
						2000,
						function () {
							$(".coming-soon").fadeIn(1500);
						}
					);
				});
			});
		});
});
