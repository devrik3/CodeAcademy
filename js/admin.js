let form = document.getElementById('form');
let userLogin = document.getElementById('user_login');
let passLogin = document.getElementById('pass_login');
let lembrarLogin = document.getElementById('lembrar_login');

let usuario = 'Henrique Dev';
let senha = '123';


let erroContainer = document.getElementById('erro');
form.addEventListener('submit', function(e) {
	if (userLogin.value === usuario && passLogin.value === senha) {
		console.log('form submitado!')
		e.preventDefault()
		const url = "index.html";
		window.location = url;
	}
	else{
		erroContainer.classList.add('box-view')

		setTimeout(() => { erroContainer.classList.remove('box-view') }, 3000 )
		e.preventDefault()
	}
		e.preventDefault()
})