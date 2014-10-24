$(function(){

	/*$('#header_mid').css("width",$(window).width());*/
	$('#backstage').css("left",-1200+$(window).width()/2);
	var hascroll=false;
	window.onscroll = function(){
		    var t = document.documentElement.scrollTop || document.body.scrollTop; 
		    if(!hascroll)
		    {
				  $( "#backstage" ).animate({
				    top:"-620px"
				  }, 1000, function() {
				  });
				  $( "#content" ).animate({
				    marginTop:"62px"
				  }, 1000, function() {
				  });
		    	hascroll=true;
		    }
		}
	$('.feed_adv').hover(function(){
		func_pop(440,$(this));
	},function(){
		$("#feed_func").remove();
	});

	$('.feed_sell').hover(function(){
		func_pop(260,$(this));
	},function(){
		$("#feed_func").remove();
	});

	function func_pop(left,element){
		element.append("<div id=\"feed_func\"><div id=\"func_like\"><img width=\"25\" src=\"img/func/like.png\"\/></div><div id=\"func_quote\"><img width=\"25\" src=\"img/func/quote.png\"\/><\/div><div id=\"func_buy\"><img width=\"25\" src=\"img/func/buy.png\"\/><\/div><\/div>");
		$("#feed_func").css("left",left-20);
		$( "#feed_func" ).animate({
		left:left,
		opacity:1
		}, 300, function() {
		});
	}
});
