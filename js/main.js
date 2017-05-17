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
		$newTab.addClass("active");
		$oldContent.removeClass("active");
		$(link).addClass("active");
	});

	//Open modal window
	$("#modal-btn").on("click", function() {
		modal.open($("<img src='img/work7.png'>"));
	});

	//Modal window - revealing module pattern
	var modal = (function() {
		//Create DOM components
		var $modalBg = $("<div class='modal-bg'/>");
		var $modal = $("<div class='modal'/>");
		var $content = $("<div class='modal-content'/>");
		var $closeBtn = $("<button class='modal-close'>Close</button>");
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
		};
	}());

	//Filter images
	var $filter, $filterButtons, $imgs, tagged;
	$filter = $(".filter");
	$filterButtons = $filter.find(".filter-buttons");
	$imgs = $filter.find("img");
	tagged = {};
	$imgs.each(function() {
		var $img, tags, tagsArray;
		$img = this;
		tags = $(this).data("tags");
		tagsArray = tags.split(",");
		tagsArray.forEach(function(tag) {
			if (tagged[tag] == null) {
				tagged[tag] = [];
			}
			tagged[tag].push($img);
		});
	});
	//Show all button
	$("<button/>", {
		text: "Show all",
		class: "filter-btn active",
		click: function() {
			$(this).addClass("active").siblings().removeClass("active");
			$imgs.show();
		}
	}).appendTo($filterButtons);
	//Filter buttons
	$.each(tagged, function(tagName) {
		$("<button/>", {
			text: tagName + "(" + tagged[tagName].length + ")",
			class: "filter-btn",
			click: function() {
				$(this).addClass("active").siblings().removeClass("active");
				$imgs.hide().filter(tagged[tagName]).show();
			}
		}).appendTo($filterButtons);
	});
});
