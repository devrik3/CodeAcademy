$('.titleQuest1').click(() => {
	$('.content1').toggle(500, () => {	$('.indicatorOpen1').css('animation','rotate .4s ease-in-out both');
});
		$('.titleQuest1').click(() => {
			$('.indicatorOpen1').css('animation','rotate-inverse .4s ease-in-out both');
		})
})






$('.titleQuest2').click(() => {
	$('.content2').toggle(500, () => {
		$('.indicatorOpen2').css('animation','rotate .4s ease-in-out both');
	});
		$('.titleQuest1').click(() => {
			$('.indicatorOpen2').css('animation','rotate-inverse .4s ease-in-out both');
		})
		$(document).ready(() => {
		if($(".content1").is(":visible"))
			$('.content1').toggle(500)
		});
})
$('.titleQuest3').click(() => {
	$('.content3').toggle(500, () => {
		$('.indicatorOpen3').css('animation','rotate .4s ease-in-out both');		
	});
		$('.titleQuest1').click(() => {
			$('.indicatorOpen3').css('animation','rotate-inverse .4s ease-in-out both');
		})
		$(document).ready(() => {
		if($(".content2").is(":visible"))
			$('.content2').toggle(500)
		});
})






$('.titleQuest4').click(() => {
	$('.content4').toggle(500, () => {
		$('.indicatorOpen4').css('animation','rotate .4s ease-in-out both');
	});
		$('.titleQuest1').click(() => {
			$('.indicatorOpen4').css('animation','rotate-inverse .4s ease-in-out both');
		})

		$(document).ready(() => {
		if($(".content3").is(":visible"))
			$('.content3').toggle(500)
		});
})






$('.titleQuest5').click(() => {
	$('.content5').toggle(500, () => {
		$('.indicatorOpen5').css('animation','rotate .4s ease-in-out both');
	});
		$('.titleQuest1').click(() => {
			$('.indicatorOpen5').css('animation','rotate-inverse .4s ease-in-out both');
		})
		$(document).ready(() => {
		if($(".content4").is(":visible"))
			$('.content4').toggle(500)
		});
})






$('.titleQuest6').click(() => {
	$('.content6').toggle(500, () => {
		$('.indicatorOpen6').css('animation','rotate .4s ease-in-out both');
	});
		$('.titleQuest1').click(() => {
			$('.indicatorOpen6').css('animation','rotate-inverse .4s ease-in-out both');
		})
		$(document).ready(() => {
		if($(".content5").is(":visible"))
			$('.content5').toggle(500)
		});

	$('#footerPrincipal').css('display', 'none')
})