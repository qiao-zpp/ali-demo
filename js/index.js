$(function() {
	$('.box').css({borderLeft:'none'});
	$('.same').mouseover(function(event) {
		$(this).addClass('current').siblings().removeClass('current');
		// $(this).prev().css({borderRight:'none'});
		var index=$(this).index();
		if (index==0) {
			$('.box').css({borderLeft:'none'});
		}else{
			$('.box').css({borderLeft:'1px solid #ccc'});
		}
		if (index==3) {
			$('.box').css({borderRight:'none'});
		}else{
			$('.box').css({borderRight:'1px solid #ccc'});
		}
	});
	
});