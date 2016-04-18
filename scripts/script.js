$(function(){
	function mouseoverEvent(index){
		$("header ul li:eq("+index+")").click(function(){
			$(this).css('backgroundColor','#2B62C1').siblings().css('backgroundColor','#00C4FF');
			$("main>div:eq("+index+")").show()
			.siblings().hide();
		})
	}
	for (var i = 0; i < $("header ul li").length; i++) {
		mouseoverEvent(i);
	}
})