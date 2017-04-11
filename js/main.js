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

	//Open modal window
	$("#modal-btn").on("click", function() {
		modal.open($("<img src='img/work7.png'>"));
	})
});

//Modal window - revealing module pattern
var modal = (function() {
	//Create DOM components
	var $modalBg = $("<div class='modal-bg'/>")
	var $modal = $("<div class='modal'/>");
	var $content = $("<div class='modal-content'/>");
	var $closeBtn = $("<button class='modal-close'>Zamknij</button>");
	$modal.append($content, $closeBtn).appendTo($modalBg);
	//Close modal on button click
	$closeBtn.on("click", function () {
		modal.close();
	});
	//Close modal on click outside the container
	$(window).on("click", function(e) {
		if ($(e.target).is($modalBg)) {
			modal.close();
		}
	});

	//Public functions
	return {
		open: function(content, w, h) {
			$content.empty().append(content);
			$modal.css({
				width: w || 'auto',
				height: h || 'auto'
			});
			$(".modal-container").append($modalBg);
		},
		close: function() {
			$modalBg.detach();
		}
	}
}());
