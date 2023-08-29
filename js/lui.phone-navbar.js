$(document).ready(function(){
	$(".lui_phone_navbar > a").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");

			if($("html").hasClass("noscroll")){
				$("html").removeClass("noscroll");
			}

			$(".lui_phone_navbar_overlay.opened").each(function(){
				$(this).removeClass("opened");
			});
		}
		else {
			$(this).siblings().removeClass("active");

			if($("html").hasClass("noscroll")){
				$("html").removeClass("noscroll");
			}

			$(".lui_phone_navbar_overlay.opened").each(function(){
				$(this).removeClass("opened");
			});

			$(this).addClass("active");

			var attr = $(this).attr("data-target");

			if(attr){
				$("html").addClass("noscroll");
				$(".lui_phone_navbar_overlay[data-target="+attr+"]").toggleClass("opened");
			}
		}
	});
});