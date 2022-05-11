// chamar a estilização da div do login

function call_login() {

    form_login.reset();

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

        container_cadastro.style.transition = "opacity 0.5s ease";
        container_cadastro.style.opacity = 0;
        container_cadastro.style.display = 'none';
        divisao_cad.style.display = 'none';

    }, 500);

    setTimeout(function () {
        container_login.style.transition = "opacity 0.5s ease";

        container_login.style.width = '100%';
        container_login.style.opacity = 1;


    }, 550);

}

// Apagar todo o resto deixado pelo cadastro anterior, caso a pessoa comece a fazer o cadastro, use a seta e tente fazer o cadastro novamente

function reset_cad() {
    inp_cad_estado.disabled = false;

    form_cadastro.reset();

    caixa_nome_errado.style.visibility = 'hidden';
    caixa_email_errado.style.visibility = 'hidden';
    caixa_cep_errado.style.visibility = 'hidden';
    caixa_estado_errado.style.visibility = 'hidden';
    caixa_senha_errado.style.visibility = 'hidden';
    caixa_senhac_errado.style.visibility = 'hidden';
    caixa_user_errado.style.visibility = 'hidden';

    certo_nome.style.opacity = 0;
    certo_email.style.opacity = 0;
    certo_cep.style.opacity = 0;
    certo_estado.style.opacity = 0;
    certo_senha.style.opacity = 0;
    certo_senhac.style.opacity = 0;
    certo_user.style.opacity = 0;

    errado_nome.style.opacity = 0;
    errado_email.style.opacity = 0;
    errado_cep.style.opacity = 0;
    errado_estado.style.opacity = 0;
    errado_senha.style.opacity = 0;
    errado_senhac.style.opacity = 0;
    errado_user.style.opacity = 0;

}

// Função usada na seta para voltar na seleção entre entrar e visitar

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
        divisao_cad.style.display = 'none';



    }, 500);

    setTimeout(function () {
        sel_1.style.transition = "opacity 0.5s ease";
        sel_2.style.transition = "opacity 0.5s ease";
        sel_1.style.opacity = 1;
        sel_2.style.opacity = 1;
        sem_login.innerHTML = `
            Sem Login? <span onclick="call_cadastro()" class="span_call_cadastro">Venha fazer parte da
            nossa comunidade!</span>`
    }, 550)

}

// chamar a estilização da div do cadastro

function call_cadastro() {

    reset_cad();

    setTimeout(function () {

        container_cadastro.style.transition = "opacity 0.5s ease";
        container_cadastro.style.opacity = 1;

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



// validações do email

function validar_email() {
    var email = inp_cad_email.value;
    caixa_email_errado.innerHTML = ''

    if (email.length < 6) {
        caixa_email_errado.innerHTML += '<span>Email muito curto</span>';

        certo_email.style.transition = 'opacity 0.5s ease';
        certo_email.style.opacity = 0;

        caixa_email_errado.style.visibility = 'visible'

        certo_email.style.display = 'none';
        errado_email.style.display = 'flex';

        setTimeout(function () {
            caixa_email_errado.style.transition = 'all 0.7s ease';
            caixa_email_errado.style.opacity = 1

            errado_email.style.transition = 'opacity 0.5s ease';
            errado_email.style.opacity = 1;
        }, 100)


    }

    if (email.indexOf('@') < 0) {
        caixa_email_errado.innerHTML += '<span>É necessário @</span>';

        certo_email.style.transition = 'opacity 0.5s ease';
        certo_email.style.opacity = 0;

        caixa_email_errado.style.visibility = 'visible';

        certo_email.style.display = 'none';
        errado_email.style.display = 'flex';

        setTimeout(function () {
            caixa_email_errado.style.transition = 'all 0.7s ease';
            caixa_email_errado.style.opacity = 1;

            errado_email.style.transition = 'opacity 0.5s ease';
            errado_email.style.opacity = 1;
        }, 100)
    }

    else if (email.startsWith('@') || email.endsWith('@')) {
        caixa_email_errado.innerHTML += '<span>Email não pode começar ou terminar com @</span>';

        certo_email.style.transition = 'opacity 0.5s ease';
        certo_email.style.opacity = 0;

        caixa_email_errado.style.visibility = 'visible'

        certo_email.style.display = 'none';
        errado_email.style.display = 'flex';

        setTimeout(function () {
            caixa_email_errado.style.transition = 'all 0.7s ease';
            caixa_email_errado.style.opacity = 1

            errado_email.style.transition = 'opacity 0.5s ease';
            errado_email.style.opacity = 1;
        }, 100)
    }

    else {
        errado_email.style.transition = 'opacity 0.5s ease';
        errado_email.style.opacity = 0;

        caixa_email_errado.style.transition = 'all 0.7s ease';
        caixa_email_errado.style.opacity = 0

        errado_email.style.display = 'none';
        certo_email.style.display = 'flex';

        setTimeout(function () {
            caixa_email_errado.style.visibility = 'hidden'

            certo_email.style.transition = 'opacity 0.5s ease';
            certo_email.style.opacity = 1;
        }, 100)
    }
}

// validaçõs do estado

function validar_estado() {
    var estado = inp_cad_estado.value;
    caixa_estado_errado.innerHTML = '';

    if (estado.length != 2) {
        caixa_estado_errado.innerHTML = '<span>A UF deve ter duas letras';

        certo_estado.style.transition = 'opacity 0.5s ease';
        certo_estado.style.opacity = 0;

        caixa_estado_errado.style.visibility = 'visible'

        errado_estado.style.display = 'flex';
        certo_estado.style.display = 'none';

        setTimeout(function () {
            caixa_estado_errado.style.transition = 'all 0.7s ease';
            caixa_estado_errado.style.opacity = 1;

            errado_estado.style.transition = 'opacity 0.5s ease';
            errado_estado.style.opacity = 1;
        }, 100)
    }

    else {
        errado_estado.style.transition = 'opacity 0.5s ease';
        errado_estado.style.opacity = 0;

        errado_estado.style.display = 'none';
        certo_estado.style.display = 'flex';

        caixa_estado_errado.style.transition = 'all 0.7s ease';
        caixa_estado_errado.style.opacity = 0;

        setTimeout(function () {
            caixa_estado_errado.style.visibility = 'visible'

            certo_estado.style.transition = 'opacity 0.5s ease';
            certo_estado.style.opacity = 1;
        }, 100)
    }
}

// validações da senha

function validar_senha() {
    var senha = inp_cad_senha.value;
    caixa_senha_errado.innerHTML = '';

    if (senha.length < 6) {
        caixa_senha_errado.innerHTML = '<span>Utilize pelo menos 6 caracteres em sua senha<span>';

        certo_senha.style.transition = 'opacity 0.5s ease';
        certo_senha.style.opacity = 0;

        caixa_senha_errado.style.visibility = 'visible'

        errado_senha.style.display = 'flex';
        certo_senha.style.display = 'none';

        setTimeout(function () {
            caixa_senha_errado.style.transition = 'all 0.7s ease';
            caixa_senha_errado.style.opacity = 1;

            errado_senha.style.transition = 'opacity 0.5s ease';
            errado_senha.style.opacity = 1;
        }, 100)
    }

    else {
        errado_senha.style.transition = 'opacity 0.5s ease';
        errado_senha.style.opacity = 0;

        errado_senha.style.display = 'none';
        certo_senha.style.display = 'flex';

        caixa_senha_errado.style.transition = 'all 0.7s ease';
        caixa_senha_errado.style.opacity = 0;

        setTimeout(function () {
            caixa_senha_errado.style.visibility = 'visible'

            certo_senha.style.transition = 'opacity 0.5s ease';
            certo_senha.style.opacity = 1;
        }, 100)
    }
}

// confirmar se a senha é a mesma da confirmação

function validar_senhac() {
    var senha = inp_cad_senha.value;
    var confirmacao = inp_confirmacao.value;
    caixa_senhac_errado.innerHTML = '';

    if (senha != confirmacao) {
        caixa_senhac_errado.innerHTML = 'Confirmação da senha diferente da senha';

        certo_senhac.style.transition = 'opacity 0.5s ease';
        certo_senhac.style.opacity = 0;

        caixa_senhac_errado.style.visibility = 'visible'

        errado_senhac.style.display = 'flex';
        certo_senhac.style.display = 'none';

        setTimeout(function () {
            caixa_senhac_errado.style.transition = 'all 0.7s ease';
            caixa_senhac_errado.style.opacity = 1;

            errado_senhac.style.transition = 'opacity 0.5s ease';
            errado_senhac.style.opacity = 1;
        }, 100)
    }

    else {
        errado_senhac.style.transition = 'opacity 0.5s ease';
        errado_senhac.style.opacity = 0;

        errado_senhac.style.display = 'none';
        certo_senhac.style.display = 'flex';

        caixa_senhac_errado.style.transition = 'all 0.7s ease';
        caixa_senhac_errado.style.opacity = 0;

        setTimeout(function () {
            caixa_senhac_errado.style.visibility = 'visible'

            certo_senhac.style.transition = 'opacity 0.5s ease';
            certo_senhac.style.opacity = 1;
        }, 100)
    }
}

// validações do usuário

function validar_user() {
    var user = inp_cad_user.value;
    caixa_user_errado.innerHTML = '';

    if (user.length < 3) {
        caixa_user_errado.innerHTML = 'Utilize pelo menos 3 caracteres em seu Username';

        certo_user.style.transition = 'opacity 0.5s ease';
        certo_user.style.opacity = 0;

        caixa_user_errado.style.visibility = 'visible'

        errado_user.style.display = 'flex';
        certo_user.style.display = 'none';

        setTimeout(function () {
            caixa_user_errado.style.transition = 'all 0.7s ease';
            caixa_user_errado.style.opacity = 1;

            errado_user.style.transition = 'opacity 0.5s ease';
            errado_user.style.opacity = 1;
        }, 100)
    }

    else {
        errado_senhac.style.transition = 'opacity 0.5s ease';
        errado_user.style.opacity = 0;

        errado_user.style.display = 'none';
        certo_user.style.display = 'flex';

        caixa_user_errado.style.transition = 'all 0.7s ease';
        caixa_user_errado.style.opacity = 0;

        setTimeout(function () {
            caixa_user_errado.style.visibility = 'hidden'

            certo_user.style.transition = 'opacity 0.5s ease';
            certo_user.style.opacity = 1;
        }, 100)
    }
}

// validações do nome

function validar_nome() {
    var nome = inp_cad_nome.value;
    caixa_nome_errado.innerHTML = ''

    if (nome.length < 3) {

        caixa_nome_errado.innerHTML += '<span>Insira um nome com pelo menos 3 letras</span>';

        certo_nome.style.transition = 'opacity 0.5s ease';
        certo_nome.style.opacity = 0;

        errado_nome.style.display = 'flex';
        certo_nome.style.display = 'none';

        caixa_nome_errado.style.visibility = 'visible'

        setTimeout(function () {
            errado_nome.style.transition = 'opacity 0.5s ease'
            errado_nome.style.opacity = 1

            caixa_nome_errado.style.opacity = 1
            caixa_nome_errado.style.transition = 'all 0.7s ease'
        }, 100)
    }

    else {
        errado_nome.style.transition = 'opacity 0.5s ease';
        errado_nome.style.opacity = 0;

        caixa_nome_errado.style.transition = 'all 0.7s ease';
        caixa_nome_errado.style.opacity = 0;

        errado_nome.style.display = 'none';
        certo_nome.style.display = 'flex';

        setTimeout(function () {
            caixa_nome_errado.style.visibility = 'hidden'

            certo_nome.style.transition = 'opacity 0.5s ease'
            certo_nome.style.opacity = 1;
        }, 100)
    }
}

// Busca no banco se já existe email / usuario ja cadastrado com o valor da input

function verificar_cadastro() {

    var nome = inp_cad_nome.value;
    var email = inp_cad_email.value;
    var cep = inp_cad_cep.value;
    var estado = inp_cad_estado.value;
    var senha = inp_cad_senha.value;
    var confirmacao = inp_confirmacao.value;
    var user = inp_cad_user.value;

    var certo_n = certo_nome.style.opacity;
    var certo_e = certo_email.style.opacity;
    var certo_es = certo_estado.style.opacity;
    var certo_c = certo_cep.style.opacity;
    var certo_u = certo_user.style.opacity;
    var certo_s = certo_senha.style.opacity;
    var certo_sc = certo_senhac.style.opacity;

    if (nome.trim() == '' || email.trim() == '' || estado.trim() == '' || cep.trim() == '' || senha.trim() == '' || confirmacao.trim() == '' || user.trim() == '') {
        alert('Preencha todos os campos!')
    }

    else if (certo_n == 1 && certo_e == 1 && certo_es == 1 && certo_c == 1 && certo_s == 1 && certo_sc == 1 && certo_u == 1) {
        cadastrar();
    }

    else {
        alert('Preencha todos os campos corretamente!')
    }
}

// Função que realmente realiza o caastro

function cadastrar() {
    var nome = inp_cad_nome.value;
    var email = inp_cad_email.value;
    var estado = inp_cad_estado.value;
    var cep = inp_cad_cep.value;
    var user = inp_cad_user.value;
    var senha = inp_cad_senha.value;

    cep = cep.replace('-', '');

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nome,
            emailServer: email,
            estadoServer: estado,
            cepServer: cep,
            userServer: user,
            senhaServer: senha
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            alert('Cadastro realizado com sucesso!')
            call_login();

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

}

// função logar

function entrar() {

    var email_user = inp_log_user_email.value;
    var senha = inp_log_senha.value;

    if (email_user == "" || senha == "") {
        alert('Preencha todos os campos para prosseguir');
        form_login.reset()
    }
    else {

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email_userServer: email_user,
                senhaServer: senha,
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.USERNAME = json.username;

                    window.location = "https://twitter.com/JustA1rs";

                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })
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