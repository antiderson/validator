let usuarios = []
let myform = document.getElementById('formulario')
function verificar() {
    var nome = document.querySelector('#nome')
    var user = (nome.value)

    var cont = document.querySelector('#email')
    var email = (cont.value)
    var senha = window.document.getElementById('password')
    var pssw = (senha.value)
    var senha2 = window.document.getElementById('rpassword')
    var rpssw = (senha2.value)

    // if (user == "" || user.length < 3 || user.length > 25) {
    //     document.getElementById('nome').style.borderColor = 'red'
    // } else {
    //     document.getElementById('nome').style.borderColor = 'green'
    // }


    //senha diferente
    if (pssw != rpssw) {
        document.getElementById('password').style.borderColor = 'red'

    }

    
    // //desabilita botao
    // if (user == "" || pssw == "" || rpssw == "") {
    //     //document.getElementById('check').disabled = true;
    //     document.getElementById('check').classList.remove('btnNormal');
    //     document.getElementById('check').classList.add('btnDisabled');
    // }


    //verifica usuario e email no array
    let usuario = {
        username: user,
        email: email,
        senha: pssw,
    }
    if (!usuarios.some(x => x.username == usuario.user || x.email == usuario.email)) {
        usuarios.push(usuario)
        console.log(usuarios)
        myform.reset()
    } else {
        alert("ja existe")
    }



}
function mudaCor() {
    document.getElementById('nome').style.borderColor = 'red'
}
