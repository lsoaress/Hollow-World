function call_login() {

    sel_1.style.transition = "opacity 0.5s ease";
    sel_2.style.transition = "opacity 0.5s ease";

    sel_1.style.opacity = 0;
    sel_2.style.opacity = 0;

    setTimeout(function () {
        container_selecao.removeChild(sel_1);
        container_selecao.removeChild(sel_2);
        container_selecao.style.width = '28%'
        container_selecao.style.height = '60%'
        container_selecao.style.marginTop = '2%'

        document.title = 'Login'
        container_login.style.display = 'flex'
        container_selecao.style.flexDirection = 'row'

    }, 500);
}

function back_home() {
    document.location.reload();
}

function call_cadastro() {

    setTimeout(function () {

        container_selecao.style.width = '67%'
        container_selecao.style.height = '60%'
        container_selecao.style.marginTop = '2%'
        container_selecao.style.justifyContent = 'space-evenly'

        container_login.style.width = '28%'

        document.title = 'Cadastro'

        divisao_cad.style.display = 'flex'
        container_cadastro.style.display = 'flex'
        sem_login.innerHTML = '<span class="span_call_cadastro">Obrigado por estar se juntando a nós!</span>'

    }, 500);
}

function verificar_cadastro() {

}

var valido = false;

function cadastrar() {
    var nome = inp_cad_nome.value;
    var email = inp_cad_email.value;
    var estado = inp_cad_estado.value;
    var cep = inp_cad_cep.value;
    var senha = inp_cad_senha.value;
    var confirmacao = inp_confirmacao.value;
    var nick = inp_cad_nick.value;

    if (nome.trim() == '' || email.trim() == '' || estado.trim() == '' || cep.trim() == '' || senha.trim() == '' || confirmacao.trim() == '' || nick.trim() == '') {
        alert('Preencha todos os campos!')
    }
    else {
        let interval = /^[^a-zA-ZãÃâÂáÁõÕóÓíÍéÉúÚ]+$/;
        
        if(email.length < 6){

        }

        if (nome.match(interval)) {
            alert('Insira um nome com caracteres válidos')
            valido = false;
        }
        else if (nome.length < 3) {
            alert('insira um nome com pelo menos 3 letras');
            valido = false;
        }
    }
}