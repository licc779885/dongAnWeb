$(function(){
	$(".Mt").click(function(){
		if($(this).children("ul").is(":visited")){
			$(this).children("ul").hide()
		}else{
			$(".Mt").children("ul").hide()
			$(this).children("ul").show()
		}
	});
	$("#nav_list").toggle(function(){
		$(".Mnav-list ul.Mb").stop().show(300);
	},function(){
		$(".Mnav-list ul.Mb").stop().hide(300);
	});
	$(".ap_list_info .tm a").bind("click",function(){
		var pd = $(this).parents(".ap_list_info").find(".td");
		var pt = $(this).parents(".ap_list_info").find(".tm");
		if(pd.is(":visible")){
			pd.slideUp()
		}else{
			$(".td").hide()
			pd.slideDown()
			
		}
	});
	$(".nav-wx a").mouseover(function(){
		$(this).children(".spn").stop().animate({height:"80px"},300)
	});
	$(".nav-wx a").mouseout(function(){
		$(this).children(".spn").stop().animate({height:"0"},300)
	});
	
})


















