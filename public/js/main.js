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

}

var valido = false;

function cadastrar() {
    var nome = inp_cad_nome.value;
    var email = inp_cad_email.value;
    var estado = inp_cad_estado.value;
    var cep = inp_cad_cep.value;
    var senha = inp_cad_senha.value;
    var confirmacao = inp_confirmacao.value;
    var user = inp_cad_user.value;

    
    if (nome.trim() == '' || email.trim() == '' || estado.trim() == '' || cep.trim() == '' || senha.trim() == '' || confirmacao.trim() == '' || user.trim() == '') {
        alert('Preencha todos os campos!')
    }
    else {
        let interval = /^[^a-zA-ZãÃâÂáÁõÕóÓíÍéÉúÚ ]+$/;
        let estado_interval = /^[^a-zA-Z]+$/
        
        
        if (nome.length < 3) {
            alert('insira um nome com pelo menos 3 letras');
            valido = false;
        }
        else{
            for (let c = 0; c < nome.length; c++) {
                if (nome[c].match(interval)) {
                    alert('Insira um nome com caracteres válidos')
                    c = nome.length;
                }
            }
            
            if (email.length < 6) {
                alert('Faltando @ no seu email')
            }
            
            else if (email.indexOf('@') < 0) {
                alert('Faltando @ no seu email')
            }

            else if (email.startsWith('@') || email.endsWith('@')) {
                alert('email não pode começar ou terminar com @')
            }

            else if(estado.match(estado_interval)){
                alert('Utilize somente letras no estado')
            }

            else if(senha.length < 6){
                alert('Utilize pelo menos 6 caracteres em sua senha')
            }

            else if(senha != confirmacao){
                alert('Senhas diferentes')
            }

            else if(user.length < 3){
                alert('Utilize pelo menos 3 caracteres em seu Username')
            }

        }
    }
}