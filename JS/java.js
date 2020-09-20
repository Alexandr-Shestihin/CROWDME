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

// Зоракс
	
	//Числа
	//Если ставим обычное число, то перед функцией нужно ставить пробел. 2 .toFixed(5)
	//(Math.sqrt(16)); извлекает корень
	//(Math.pow(5,2)); возводит в степень, первое число это число, возводимое в степень, а второе число-это степень
	//(100 === 100); проверяет два операнда равны или нет
	//(100 !== "100"); проверяет равенство по типу
	//(100>1); возаращает данные логического типа (булеан)
	//(100<1);
	//(100>=1);
	//(100<=1);
	//(5 .toFixed(2)); кол-во знаков после точки (запятой)
	// (10%7); выводит остаток от деления
	//(10/7); обычные деление
	//n=n/20; для более сокращённого кода можно писать так n /=20;
	
	//Типы данных

	// var number = 1000, 
	// 	string = "Hello!",
	// 	Bool = true,
	// 	Null=null,
	// 	Undef=undefined;

	// 	console.log(typeof number);
	// 	console.log(typeof string);
	// 	console.log(typeof Bool);
	// 	console.log(typeof Null);
	// 	console.log(typeof Undef);


	// 	var obj = {name:"Сашес"},
	// 	array = [1,2,3,4],
	// 	regexp=/w+/g,
	// 	func = function() {};

	// 	console.log("");
	// 	console.log(typeof obj);
	// 	console.log(typeof array);
	// 	console.log(typeof regexp);
	// 	console.log(typeof func);


// Хауди хо


// jQuery("document").ready(function(){

// 	var a1 = "РФ";
// 	if (a1=="РФ"){
// 		jQuery(".lol").html("Плохо!");
// 	}else{
// 		jQuery(".lol").html("Хорошо!");
// 	}

// });

	//jQuery("button").on("click", function(){})-событие по клику
	// jQuery("body").append('<a href="http://google.com">Гугл блядь!</a>'); //добавляет

	// jQuery("div").remove(); //удаляет 

	// var i, katet1 = 10*10, katet2 = 20*20, katet12Sqrt=Math.sqrt(katet1+katet2);
	// i = jQuery("p").clone(); //клонирует
	// jQuery("body").append(i);

	// alert(Math.floor(katet12Sqrt));

	//alert("Зигхайль");


	// jQuery("input").on("change", function(){
	// 			var value1, value2, value3;
	// 			value1=jQuery(".v1").val();
	// 			value2=jQuery(".v2").val();
				
	// 			value1=parseInt(value1);
	// 			value2=parseInt(value2);

	// 			value3=value1+value2;

	// 			jQuery(".lol").html(value3);
				
	// });