$(".main").on("click", function() {

	let current = $(this).attr('class').split(" ")[2];
	let top = $(this).parent().prev().find('.'+current+"_red").length;
	let bottom = $(this).parent().next().find('.'+current+"_red").length;
	let left = $(this).prev().length != 0 ? $(this).prev()[0]['className'].split(" ").length : 3;
	let right = $(this).next().length != 0 ? $(this).next()[0]['className'].split(" ").length : 3;
	
	if(top == 0 && bottom == 0 && left == 3 && right == 3){
		if (!$(this).hasClass(current+"_red")) {
			$(this).addClass(current+"_red");
			$('.'+current+"_red").css('background-color','red');
		}else{
			$(this).removeClass(current+"_red");
			$(this).removeAttr('style');
		}
	}  
});
