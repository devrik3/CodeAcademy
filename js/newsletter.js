function button_change_color() {
	const button = document.getElementById('button_submit_newsletter');
	button.classList.add('color_change');
}



let formN = document.getElementById('formulario-newsletter');
let emailN = document.getElementById('email-newsletter');
let error_message = document.getElementById('erro-newsletter');
let sucess_message = document.getElementById('message-sucess');
let leitores  = document.getElementById('leitores');
formN.addEventListener('submit', function(e) {
	if(emailN.value === ''){
		e.preventDefault()
		error_message.classList.add('d-flex');
		setTimeout(() => {error_message.classList.remove('d-flex')}, 4000)
	}else{
		e.preventDefault()
		sucess_message.classList.add('d-block');
		setTimeout(() => {
			sucess_message.classList.remove('d-block')
			leitores.innerHTML = '921 Leitores Ativos.'
			}, 6000)
		emailN.value = '';
		emailN.innerHTML = 'O Seu E-Mail Foi Registrado! :)';
	}
	e.preventDefault()
})