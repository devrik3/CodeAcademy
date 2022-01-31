let popup = document.getElementById('popup-aviso');


function showPopup() {
	const hasHidden = localStorage.getItem('hasHidden');
	if (hasHidden) popup.classList.add('hide')
}
function hidePopup() {
	localStorage.setItem('hasHidden', true);
	popup.classList.add('hide');
}