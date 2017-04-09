$(document).ready(function() {
	//Переменная для открытия и закрытия меню
	var flag=false;
	var background=$('#menus');
	var hamburgers=$('#main-bars');
	var menu_items=$('.menu-bars__item');
	//Окрываем и закрываем меню
	$('#menu-bars').click(function() {

			//background.toggleClass('menu-table_active');
			background.fadeToggle('slow');
			hamburgers.toggleClass('is_active');

	});

	$('.menu-table__link').click(function(event) {
		background.toggleClass('menu-table_active');
		hamburgers.toggleClass('is_active');
		background.fadeToggle('slow');
	});

	/*Функция смены цвета гамбургер меню, в зависимости от положения*/
	$(window).scroll(function(){
		if ( $(document).scrollTop() > 500 ) {
			hamburgers.addClass('menu-bars_green');
		}else{
			hamburgers.removeClass('menu-bars_green');
		}
	});
	$(window).scroll();
});
