$(document).ready(function() {
	$('.login-item').validate({
		rules:{
			name:"required",
			pass:"required",
		},
		messages:{
			name:"Enter your name",
			pass:"Enter your password"
		}
	});
});