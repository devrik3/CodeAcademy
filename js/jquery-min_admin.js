function voltar_AreaRestrita() {
	const url = "../index.html";
	window.location = url;
}
function continuar() {
	const popup = document.getElementById('pop-up') 
	popup.classList.toggle('popup-desactive');

	const containerLogin = document.getElementById('login_container')
	containerLogin.classList.toggle('formulario_active')
}