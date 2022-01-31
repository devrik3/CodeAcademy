$('.saibaMaisBTN').click(() => {
	$('html, body').scrollTop( 640 );
	$('.infoProduto').css('display','flex');
	

	$('.infoProduto').fadeIn(() => {

		$('#document').css('overflow', 'hidden')

		$('#comprar').click(() => {
			$('.infoProduto').fadeOut(() => {
				$('.infoCompra').css('display', 'flex')
			})
		})
		

		$('.fa-star').click(() => {
			$('.fa-star').css('color','#FFF');
		})

		$('.close').click(() => {
			$('.infoProduto').fadeOut();
		$('#document').css('overflow-y', 'scroll')
		});
		$('.introducaoBTN').click(() => {
			$('.infoProduto').fadeOut()
			$('.infoIntroducao').fadeIn(() => {
				$('#closeCourseFolder').click(() => {
				$('.infoIntroducao').fadeOut();
				})
			});
			$('.infoIntroducao').css('display','flex')
		})
	});
});

$('#arrow1').click(() => {
	$('#arrow1').css('display', 'none');
	$('#arrow2').css('display', 'block');
	$('#footerPrincipal').css('display', 'flex')
	
		$('#arrow2').click(() => {
			$('#arrow2').css('display','none');
			$('#arrow1').css('display','block')
			$('#footerPrincipal').css('display', 'none')

		})
})

$('.scrolling').click(() => {
	$('html, body').animate({scrollTop: 0}, 500);
})

$('#aviso-feeback').click(() => {
	$('html, body').animate({scrollTop: 1200},750)
})
$('#veja-mais').click(() => {
	$('#veja-mais').text('Veja Menos')
	$('.box-feedback-col2').fadeToggle(500, () => {
		$('html, body').animate({scrollTop: 500}, 500);
	});	
	let a = 1;
	let i = $('.invisivel');
	i.innerHTML = a++;
	if(a == 2){
		$('#veja-mais').text('Veja Menos');
	}
	if(a == 0){
		$('#veja-mais').text('Veja Mais')
	}
	$('#veja-mais').click(() => { i.innerHTML = a-- })
})


$('#matriculabtn').click(() => {
	const target_offset = $(".curso").offset();
	const target_top = target_offset.top;
	$('html, body').animate({ scrollTop: target_top }, 500);
})