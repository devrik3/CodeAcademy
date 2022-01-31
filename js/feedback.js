let form = document.getElementById('formulario')
let fname = document.getElementById('fname')
let femail = document.getElementById('femail')
let ffeedback = document.getElementById('ffeedback')
let fsubmit = document.getElementById('fsubmit');


let sucess = document.getElementById('sucess');
let adsBlock = document.getElementById('aviso-block');
let important = localStorage.getItem('form')

let spinner = document.getElementById('spinner');

adsBlock.classList.add('d-none');
if(important == null){
	adsBlock.classList.add('d-none');
	fsubmit.classList.add('d-flex');
}
else{
	fsubmit.classList.add('d-none');
	adsBlock.classList.add('d-block');
}
form.addEventListener('submit', function(block) {
		if (fname.value === '') {
			fname.style.border = '1.5px solid red';
			setTimeout(() => { fname.style.border = '1.5px solid #848484'; },2000)
			block.preventDefault()
		}
		else{}
		if(femail.value === ''){
			femail.style.border = '1.5px solid #d02229';
			setTimeout(() => { femail.style.border = '1.5px solid #848484'; },2000)
			block.preventDefault()

		}else{}
		if (ffeedback.value === '') {
			ffeedback.style.border = '1.5px solid #d02229';
			setTimeout(() => { ffeedback.style.border = '1.5px solid #848484'; },2000)
			block.preventDefault()
		}
		else{
			block.preventDefault();
		}
		if(fname.value > '' && femail.value > '' && ffeedback.value > ''){
			let infoImportante = localStorage.setItem('form', ffeedback.value, 'email', femail);
			spinner.classList.add('d-block')
			sucess.classList.add('d-flex');
			setTimeout(() => { 
				sucess.classList.remove('d-flex');
				fname.value = '';
         		femail.value = '';
         		ffeedback.value = '';
			 }, 2500)
			setTimeout(() => {
				adsBlock.classList.add('d-block');
	            fsubmit.classList.add('d-none');
			},3000)

			block.preventDefault()
		}else{block.preventDefault()}
		block.preventDefault()
})