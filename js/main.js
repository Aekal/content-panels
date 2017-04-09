$(function() {
	//Cache DOM
	var $tabList = $(".tab-list");

	//Accordion list
	$(".accordion-list").on("click", "button", function() {
		$(this).next().slideToggle();
	});

	//Tab Panel
	$tabList.on("click", "a", function(e) {
		e.preventDefault();
		var $oldTab = $tabList.find("a.active");
		var $newTab = $(this);
		var $oldContent = $(".tab-content.active");
		var link = $newTab.attr("href");

		$oldTab.removeClass("active");
		$newTab.addClass("active")
		$oldContent.removeClass("active");
		$(link).addClass("active");
	});
});
