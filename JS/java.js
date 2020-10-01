	$(document).ready(function(){
		$('.header__burger').click(function(event){
			$('.header__burger, .header__menu').toggleClass('active');
			$('body').toggleClass('lock');
		})
		$('.header__link').click(function(event){
			$('.header__burger, .header__menu').removeClass('active');
			$('body').removeClass('lock');
		})

		$('.btn-row_1').click(function(event){
			$('.btn-row_1, .btn-row__flex-container_1').addClass('active');
			$('.btn-row_2, .btn-row_3, .btn-row__flex-container_2, .btn-row__flex-container_3').removeClass('active');
		})
		$('.btn-row_2').click(function(event){
			$('.btn-row_2, .btn-row__flex-container_2').addClass('active');
			$('.btn-row_1, .btn-row_3, .btn-row__flex-container_1, .btn-row__flex-container_3').removeClass('active');
		})
		$('.btn-row_3').click(function(event){
			$('.btn-row_3, .btn-row__flex-container_3').addClass('active');
			$('.btn-row_2, .btn-row_1, .btn-row__flex-container_2, .btn-row__flex-container_1').removeClass('active');
		})
	})
 
