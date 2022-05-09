function call_login() {

    sel_1.style.transition = "opacity 0.5s ease";
    sel_2.style.transition = "opacity 0.5s ease";

    sel_1.style.opacity = 0;
    sel_2.style.opacity = 0;


    setTimeout(function () {
        sel_1.style.display = 'none';
        sel_2.style.display = 'none';
        container_selecao.style.width = '28%';
        container_selecao.style.height = '60%';
        container_selecao.style.marginTop = '2%';



        document.title = 'Login';
        container_login.style.display = 'flex';
        container_selecao.style.flexDirection = 'row';

    }, 500);

    setTimeout(function () {
        container_login.style.transition = "opacity 0.5s ease";
        container_cadastro.style.transition = "opacity 0.5s ease";

        container_login.style.width = '100%';

        container_login.style.opacity = 1;
        container_cadastro.style.opacity = 1;

    }, 550);

}

function back_home() {

    container_login.style.transition = "opacity 0.5s ease";
    container_cadastro.style.transition = "opacity 0.5s ease";

    container_login.style.opacity = 0;
    container_cadastro.style.opacity = 0;


    setTimeout(function () {

        container_login.style.display = 'none';
        container_cadastro.style.display = 'none';
        document.title = 'Home';

        sel_1.style.display = 'flex';
        sel_2.style.display = 'flex';

        container_selecao.style.width = '15%';
        container_selecao.style.height = '35%';
        container_selecao.style.marginTop = '10%';
        container_selecao.style.flexDirection = 'column';
        divisao_cad.style.display = 'none'

    }, 500);

    setTimeout(function () {
        sel_1.style.transition = "opacity 0.5s ease";
        sel_2.style.transition = "opacity 0.5s ease";
        sel_1.style.opacity = 1;
        sel_2.style.opacity = 1;
    }, 550)

    sem_login.innerHTML = `
        Sem Login? <span onclick="call_cadastro()" class="span_call_cadastro">Venha fazer parte da
        nossa comunidade!</span>`
}

function call_cadastro() {

    setTimeout(function () {

        container_selecao.style.width = '67%';
        container_selecao.style.height = '60%';
        container_selecao.style.marginTop = '2%';
        container_selecao.style.justifyContent = 'space-evenly';

        container_login.style.width = '28%';

        document.title = 'Cadastro';

        divisao_cad.style.display = 'flex';
        container_cadastro.style.display = 'flex';
        sem_login.innerHTML = '<span class="span_call_cadastro">Obrigado por estar se juntando a nós!</span>';

    }, 500);
}

function verificar_cadastro() {
    var nome = inp_cad_nome.value;
    var email = inp_cad_email.value;
    var estado = inp_cad_estado.value;
    var cep = inp_cad_cep.value;
    var senha = inp_cad_senha.value;
    var confirmacao = inp_confirmacao.value;
    var user = inp_cad_user.value;

    var certo_n = certo_nome.style.opacity;
    var certo_e = certo_email.style.opacity;
    var certo_es = certo_estado.style.opacity;
    var certo_c = certo_cep.style.opacity;
    var certo_s = certo_senha.style.opacity;
    var certo_sc = certo_senhac.style.opacity;
    var certo_u = certo_user.style.opacity;

    if(certo_n == 1 && certo_e == 1 && certo_es == 1 && certo_c == 1 && certo_s == 1 && certo_sc == 1 && certo_u == 1){
        alert('tudo certo patrão')
    }

    if (nome.trim() == '' || email.trim() == '' || estado.trim() == '' || cep.trim() == '' || senha.trim() == '' || confirmacao.trim() == '' || user.trim() == '') {
        alert('Preencha todos os campos!')
    }
}

function cadastrar() {
    
}

function validar_email() {
    var email = inp_cad_email.value;

    if (email.length < 6) {
        /* alert('Email muito curto'); */

        certo_email.style.transition = 'opacity 0.5s ease';
        certo_email.style.opacity = 0;

        errado_email.style.transition = 'opacity 0.5s ease';
        errado_email.style.opacity = 1;
    }

    else if (email.indexOf('@') < 0) {
        /* alert('Faltando @ no seu email'); */

        certo_email.style.transition = 'opacity 0.5s ease';
        certo_email.style.opacity = 0;

        errado_email.style.transition = 'opacity 0.5s ease';
        errado_email.style.opacity = 1;
    }

    else if (email.startsWith('@') || email.endsWith('@')) {
        /* alert('email não pode começar ou terminar com @'); */

        certo_email.style.transition = 'opacity 0.5s ease';
        certo_email.style.opacity = 0;

        errado_email.style.transition = 'opacity 0.5s ease';
        errado_email.style.opacity = 1;
    }

    else {
        errado_email.style.transition = 'opacity 0.5s ease';
        errado_email.style.opacity = 0;

        certo_email.style.transition = 'opacity 0.5s ease';
        certo_email.style.opacity = 1;
    }
}

function validar_estado() {
    var estado = inp_cad_estado.value;

    if(estado.length != 2){
        certo_estado.style.transition = 'opacity 0.5s ease';
        certo_estado.style.opacity = 0;

        errado_estado.style.transition = 'opacity 0.5s ease';
        errado_estado.style.opacity = 1;
    }

    else {
        errado_estado.style.transition = 'opacity 0.5s ease';
        errado_estado.style.opacity = 0;

        certo_estado.style.transition = 'opacity 0.5s ease';
        certo_estado.style.opacity = 1;
    }
}

function validar_senha() {
    var senha = inp_cad_senha.value;

    if (senha.length < 6) {
        /*  alert('Utilize pelo menos 6 caracteres em sua senha') */

        certo_senha.style.transition = 'opacity 0.5s ease';
        certo_senha.style.opacity = 0;

        errado_senha.style.transition = 'opacity 0.5s ease';
        errado_senha.style.opacity = 1;
    }

    else {
        errado_senha.style.transition = 'opacity 0.5s ease';
        errado_senha.style.opacity = 0;

        certo_senha.style.transition = 'opacity 0.5s ease';
        certo_senha.style.opacity = 1;
    }
}

function validar_senhac() {
    var senha = inp_cad_senha.value;
    var confirmacao = inp_confirmacao.value;

    if (senha != confirmacao) {
        /* alert('Senhas diferentes') */
        certo_senhac.style.transition = 'opacity 0.5s ease';
        certo_senhac.style.opacity = 0;

        errado_senhac.style.transition = 'opacity 0.5s ease';
        errado_senhac.style.opacity = 1;
    }

    else{
        errado_senhac.style.transition = 'opacity 0.5s ease';
        errado_senhac.style.opacity = 0;

        certo_senhac.style.transition = 'opacity 0.5s ease';
        certo_senhac.style.opacity = 1;
    }
}

function validar_user(){
    var user = inp_cad_user.value;

    if(user.length < 3){
        /* alert('Utilize pelo menos 3 caracteres em seu Username') */

        certo_user.style.transition = 'opacity 0.5s ease';
        certo_user.style.opacity = 0;

        errado_user.style.transition = 'opacity 0.5s ease';
        errado_user.style.opacity = 1;
    }

    else{
        errado_user.style.transition = 'opacity 0.5s ease';
        errado_user.style.opacity = 0;

        certo_user.style.transition = 'opacity 0.5s ease';
        certo_user.style.opacity = 1;
    }
}

function validar_nome() {
    var nome = inp_cad_nome.value;

    if (nome.length < 3) {
        /* alert('insira um nome com pelo menos 3 letras'); */

        certo_nome.style.transition = 'opacity 0.5s ease'
        certo_nome.style.opacity = 0

        errado_nome.style.transition = 'opacity 0.5s ease'
        errado_nome.style.opacity = 1
    }

    else {
        errado_nome.style.transition = 'opacity 0.5s ease'
        errado_nome.style.opacity = 0

        certo_nome.style.transition = 'opacity 0.5s ease'
        certo_nome.style.opacity = 1;
    }
}


// Revisar e Achar um jeito certo de fazer isso

/* for (let c = 0; c < nome.length; c++) {
    let interval = /^[^a-zA-ZãÃâÂáÁõÕóÓíÍéÉúÚ ]+$/;

    if (nome[c].match(interval)) {
        alert('Insira um nome com caracteres válidos')
        c = nome.length;

        nome_nome.style.transition = 'opacity 0.5s ease'
        nome_nome.style.opacity = 1

        certo_nome.style.transition = 'opacity 0.5s ease'
        certo_nome.style.opacity = 0
    }
    else {
        errado_nome.style.transition = 'opacity 0.5s ease'
        errado_nome.style.opacity = 0

        certo_nome.style.transition = 'opacity 0.5s ease'
        certo_nome.style.opacity = 1;
    }
} */