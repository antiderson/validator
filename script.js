let usuarios = []
let myform = document.getElementById('formulario')
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#password')
let rsenha = document.querySelector('#rpassword')
let btn = document.querySelector('#check');
btn.disabled = true;
btn.classList.remove('btnNormal');
btn.classList.add('btnDisabled');

function mudaSpan(campo, msg) {
    document.getElementById(`u${campo}`).style.color = msg;
}
function mudaCor(campo, cor) {
    document.getElementById(`${campo}`).style.borderColor = cor;
}

function fnCheckBtn() {
    let isValid = true;
    if (nome.value == "" || nome.value.length < 3 || nome.value.length > 25) isValid = false;

    let emailrejex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailrejex.test(email.value)) isValid = false;

    if (senha.value.length < 8) isValid = false;

    if (rsenha.value != senha.value) isValid = false;

    if (isValid) {
        btn.disabled = false;
        btn.classList.remove('btnDisabled');
        btn.classList.add('btnNormal');
    } else {
        btn.disabled = true;
        btn.classList.remove('btnNormal');
        btn.classList.add('btnDisabled');
    }
}

nome.addEventListener('blur', ({ target }) => {
    if (target.value == "" || target.value.length < 3 || target.value.length > 25) {
        mudaCor(target.id, 'red')
        mudaSpan(target.id, 'red')
    } else {
        mudaCor(target.id, 'green')
        mudaSpan(target.id, 'rgba(0, 0, 0, 0.0)')
    }
    fnCheckBtn();
})

email.addEventListener('blur', ({ target }) => {
    let emailrejex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailrejex.test(target.value)) {
        mudaCor(target.id, 'red')
        mudaSpan(target.id, 'red')
    } else {
        mudaCor(target.id, 'green')
        mudaSpan(target.id, 'rgba(0, 0, 0, 0.0)')
    }
    fnCheckBtn();
})

senha.addEventListener('blur', ({ target }) => {
    if (target.value.length < 8) {
        mudaCor(target.id, 'red')
        mudaSpan(target.id, 'red')
    } else {
        mudaCor(target.id, 'green')
        mudaSpan(target.id, 'rgba(0, 0, 0, 0.0)')
    }
    fnCheckBtn();
})

rsenha.addEventListener('blur', ({ target }) => {
    if (senha.value != target.value) {
        mudaCor(target.id, 'red')
        mudaSpan(target.id, 'red')
    } else {
        mudaCor(target.id, 'green')
        mudaSpan(target.id, 'rgba(0, 0, 0, 0.0)')
    }
    fnCheckBtn();
})

function verificar() {
    let usuario = {
        username: nome.value,
        email: email.value,
        senha: senha.value,
    }
    let valido = true;

    if (usuarios.some(x => x.email == usuario.email)) {
        valido = false;
        document.getElementById('uemail').innerText = "Email ja utilizado"
        mudaCor('email', 'red')
        mudaSpan('email', 'red')
    }

    if (usuarios.some(x => x.username == usuario.username)) {
        valido = false;
        document.getElementById('unome').innerText = "nome de usuario ja utilizado"
        mudaCor('nome', 'red')
        mudaSpan('nome', 'red')
    }

    if (valido) {
        usuarios.push(usuario)
        myform.reset()
    }
}

btn.addEventListener('click', debounce(verificar, 5000))

function debounce(func, wait) {
	let timer = null;
	return function() {
		clearTimeout(timer);
		timer = setTimeout(func, wait);
	}
}