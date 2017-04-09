$(function() {
	$(".accordion-list").on("click", "button", function() {
		$(this).next().slideToggle();
	});
});
