$('.dashboard').click( () => {
	console.log('dashboard click')
} )

$('.alunos').click( () => {
	console.log('cursos click')
} )

$('.cursos').click( () => {
	console.log('cursos click')
} )

$('.cupom').click( () => {
	console.log('cupom click')
} )

$('.comunidade').click( () => {
	console.log('comunidade click')
} )

$('.faq').click( () => {
	console.log('faq click')
} )

$('.configuracoes').click( () => {
	console.log('config click')
} )

$('.logo').click(() => {
	$('.left-Aside').slideToggle(300)
})

$('.hamburguer').click(() => {
	$('header section').slideToggle(500)
})