
let body = document.getElementById('document')

let svgAccount = document.getElementById('accountSvg');
let headerBG = document.getElementById('headerSecundario')

svgAccount.addEventListener('click', () => {
	headerBG.classList.toggle('headerFocus')
})

let form = document.getElementById('formulario');
let CampoNome = document.getElementById('campoNome');
let button = document.getElementById('submitRegister');



form.addEventListener('submit', (e) => {
let email = document.getElementById('email'),
    nome = document.getElementById('nomeCompleto').value,
    senha = document.getElementById('password').value;
  
let erroEmail = document.getElementById('erroEmail'),
	erroNome = document.getElementById('erroNome'),
	erroSenha = document.getElementById('erroSenha');

let spinner = document.getElementById('spinner');
 
let login = document.getElementById('login')

let nomeHeader = document.getElementById('nomeAccountHeader')

let normalBorder = '5px solid #F3E378;';
let erroBorder = '5px solid #F3E378;';
let sucessBorder = '5px solid #F3E378;';

let formBG = document.getElementById('formBG');

	if( ! email.value ) {
		erroEmail.style.display = 'block';
		formBG.style.borderBottom = '15px solid red';
		setTimeout(() => {
			erroEmail.style.display = 'none';
			formBG.style.borderBottom = '15px solid #F3E378';
		}, 4000);

		e.preventDefault();
		return false;
	} else if( ! nome ) {
		erroNome.style.display = 'block';
		formBG.style.borderBottom = '15px solid red';
		setTimeout(() => {
	  		erroNome.style.display = 'none';
	  		formBG.style.borderBottom = '15px solid #F3E378';
	  	}, 4000);   
	    e.preventDefault();
	    return false;
	} if ( ! senha) {
	   	erroSenha.style.display = 'block';
	   	formBG.style.borderBottom = '15px solid red';
		setTimeout(() => {
			erroSenha.style.display = 'none';
			formBG.style.borderBottom = '15px solid #F3E378';
		}, 4000);
	   	e.preventDefault();
	   	return false;
	} else{
		campoNome.style.display = 'none'; // formulario enviado com sucesso
		spinner.style.display = 'block';

		setTimeout(() => {
			login.style.display = 'none';
			spinner.style.display = 'none';
			nomeHeader.innerHTML = 'Ola, ' + nome + '.' 
		}, 3500)

		let infoRegister = {
							'email': email,
							'senha': senha
						   }

		console.log(infoRegister)
	  	e.preventDefault();
	  	return false; 
	}
 	e.preventDefault();

})


let registerBTN = document.getElementById('registerBTN');

let fechar = document.getElementById('fechar')

registerBTN.addEventListener('click', (h) => {
	login.classList.toggle('loginView');	
	body.style.overflowY = 'hidden';
		fechar.addEventListener('click', () => {
			login.classList.toggle('loginView');
			setTimeout(() => { 
				body.style.overflowY = 'scroll'
			},10)
			return true;
		})
})

let boxErro = document.getElementById('boxErro');
let erroText = document.getElementById('erroCompra');

let paypal = document.getElementById('paypalCheckout');
let boleto = document.getElementById('boletoCheckout');
let card = document.getElementById('cardCheckout');

let boxCC = document.getElementById('methodCard');

paypal.addEventListener('click', () => {
	console.log('1')
	boleto.addEventListener('click', () => {
		boxErro.style.display = 'flex';
		erroText.innerHTML = 'Não é possivel adicionar mais de um metodo de pagamento!';
		setTimeout(() => {boxErro.style.direction = 'none'}, 3500)
	})
	card.addEventListener('click', () => {
		boxErro.style.display = 'flex';
		erroText.innerHTML = 'Não é possivel adicionar mais de um metodo de pagamento!';
		setTimeout(() => {boxErro.style.direction = 'none'}, 3500)
	})
})
boleto.addEventListener('click', () => {
	console.log('1')
	card.addEventListener('click', () => {
		boxErro.style.display = 'flex';
		erroText.innerHTML = 'Não é possivel adicionar mais de um metodo de pagamento!';
		setTimeout(() => {boxErro.style.direction = 'none'}, 3500)
	})
	paypal.addEventListener('click', () => {
		boxErro.style.display = 'flex';
		erroText.innerHTML = 'Não é possivel adicionar mais de um metodo de pagamento!';
		setTimeout(() => {boxErro.style.direction = 'none'}, 3500)
	})
})
card.addEventListener('click', () => {

	boxCC.style.display = 'flex';

	boleto.addEventListener('click', () => {
		boxErro.style.display = 'flex';
		erroText.innerHTML = 'Não é possivel adicionar mais de um metodo de pagamento!';
		setTimeout(() => {boxErro.style.direction = 'none'}, 3500)
	})
	boleto.addEventListener('click', () => {
		boxErro.style.display = 'flex';
		erroText.innerHTML = 'Não é possivel adicionar mais de um metodo de pagamento!';
		setTimeout(() => {boxErro.style.direction = 'none'}, 3500)
	})



})

let folder_1 = document.getElementById('folder1');
let arrow_folder1 = document.getElementById('arrow_folder1')
let videoIntroducao = document.getElementById('videoIntroducao');

folder_1.addEventListener('click', () => {
	arrow_folder1.classList.toggle('rotateArrow');
	videoIntroducao.classList.toggle('contentFlex')
})




let erroCourse = document.getElementById('erroCoursePag')
let htmlB = document.getElementById('HTML5B');
let htmlA = document.getElementById('HTML5A');
let cssB = document.getElementById('CSS3B');
let cssA = document.getElementById('CSS3A');
let jsB = document.getElementById('JSB');
let jsA = document.getElementById('JSA');

htmlB.addEventListener('click', () => {
	erroCourse.style.display = 'block';
	setTimeout(() => {
		erroCourse.style.display = 'none';
	},4500)
})
htmlA.addEventListener('click', () => {
	erroCourse.style.display = 'block';
	setTimeout(() => {
		erroCourse.style.display = 'none';
	},4500)
})
cssB.addEventListener('click', () => {
	erroCourse.style.display = 'block';
	setTimeout(() => {
		erroCourse.style.display = 'none';
	},4500)
})
cssA.addEventListener('click', () => {
	erroCourse.style.display = 'block';
	setTimeout(() => {
		erroCourse.style.display = 'none';
	},4500)
})
jsB.addEventListener('click', () => {
	erroCourse.style.display = 'block';
	setTimeout(() => {
		erroCourse.style.display = 'none';
	},4500)
})
jsA.addEventListener('click', () => {
	erroCourse.style.display = 'block';
	setTimeout(() => {
		erroCourse.style.display = 'none';
	},4500)
})