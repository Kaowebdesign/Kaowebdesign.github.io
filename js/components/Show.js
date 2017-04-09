$(document).ready(function() {


			$(window).scroll(function(){

				if ( $(document).scrollTop() > 120 ) {
					$('#about .about__caption').css({
						'opacity': '1',
						'transition':'0.5s'
					});

					$('#skils .skils__caption').css({
						'opacity': '1',
						'transition':'0.5s'
					});

					$('#skils .skils__text').css({
						'opacity': '1',
						'transition':'0.5s'
					});
				}

				if ( $(document).scrollTop() > 320 ) {
					$('#about .about__image').css({
						'opacity': '1',
						'transition':'0.5s'
					});

					$('#skils .skils__all-caption:eq(0)').css({
						'opacity': '1',
						'transition':'0.5s'
					});

					$('#skils .skils__frontend').css({
						'opacity': '1',
						'transition':'0.5s'
					});
				}

				if ( $(document).scrollTop() > 520) {

					$('#skils .skils__all-caption:eq(1)').css({
						'opacity': '1',
						'transition':'0.5s'
					});

					$('#skils .skils__backend').css({
						'opacity': '1',
						'transition':'0.5s'
					});
				}

				if ( $(document).scrollTop() > 620) {

					$('#skils .skils__all-caption:eq(2)').css({
						'opacity': '1',
						'transition':'0.5s'
					});

					$('#skils .skils__workflow').css({
						'opacity': '1',
						'transition':'0.5s'
					});
				}

				if ( $(document).scrollTop() > 750 ) {
					$('#about .who').css({
						'opacity': '1',
						'transition':'0.5s'
					});

					$('#skils .skils__all-caption:eq(3)').css({
						'opacity': '1',
						'transition':'0.5s'
					});

					$('#skils .skils__other').css({
						'opacity': '1',
						'transition':'0.5s'
					});
				}
			});
});
