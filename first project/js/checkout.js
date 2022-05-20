$(document).ready(function() {
	$('.form-checkout-infor').validate({
		rules:{
			name:"required",
			mail:{
				required:true,
				email:true,
			}
			number:"required",
		},
		messages:{
			name:"Enter your name",
			mail:"Enter your mail",
			number:"Enter your number",
		}
	});
});