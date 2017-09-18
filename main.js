$(document).ready(main);

var contador = 1;
var menuresp = 1; //Este contador evita que el meunu responsivo se vuelva Sticky

function main () {
	$('.bt-menu').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
			menuresp =menuresp+1;
		} else {
			contador = 1;
			//menuresp = menuresp+1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
	var altura= $('.menu').offset().top;
	//alert(altura);
	$(window).on('scroll', function(){
		if ($(window).scrollTop()> altura) {
			$('.menu').addClass('sticky');
		} else{
			$('.menu').removeClass('sticky');
		}
	});
}


////STICKY MENU////////////
$(document).ready(function(){
	var altura= $('.menu').offset().top;
	//alert(altura);
	$(window).on('scroll', function(){
		if ($(window).scrollTop()> altura && menuresp== 1) {
			$('.menu').addClass('sticky');
		} else{
			
			$('.menu').removeClass('sticky');
		}
	});
});

//////VENTANA DE LOGIN///////////
function openLogin(){
	$('.login').slideDown("slow");
}
function closeLogin(){
	$('.login').slideUp("fast");
}
function openCongreso(){
	$('.congreso').slideDown("slow");
}
function closeCongreso(){
	$('.congreso').slideUp("fast");
}
function openArticulos(){
	$('.articulos').slideDown("slow");
}
function closeArticulos(){
	$('.articulos').slideUp("fast");
}
function openEstancias(){
	$('.estancias').slideDown("slow");
}
function closeEstancias(){
	$('.estancias').slideUp("fast");
}
function openPatentes(){
	$('.patentes').slideDown("slow");
}
function closePatentes(){
	$('.patentes').slideUp("fast");
}
function openCapitulos(){
	$('.capitulos').slideDown("slow");
}
function closeCapitulos(){
	$('.capitulos').slideUp("fast");
}
function openDesarrollosTec(){
	$('.desarrollosTec').slideDown("slow");
}
function closeDesarrollosTec(){
	$('.desarrollosTec').slideUp("fast");
}
function openDesarrolloSW(){
	$('.desarrolloSW').slideDown("slow");
}
function closeDesarrolloSW(){
	$('.desarrolloSW').slideUp("fast");
}