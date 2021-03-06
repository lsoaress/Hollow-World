function back_start() {
    window.location = 'perfil.html#inicio'
}

function back_speed() {
    window.location = 'speedrun.html#inicio'
}


function validar_login() {
    if (sessionStorage.length == 0) {
        window.location = 'speedrun.html#inicio'
    }
}

function call_image() {
    select_img.style.display = 'flex'
    sombra_main.style.display = 'block'
}


function change_img() {
    num = Number(inp_valor.value).toFixed();
    seletor.style.backgroundImage = lista_imgs[num];
    seletor.style.backgroundSize = 'cover'
}

function update_img() {
    var idUsuario = sessionStorage.ID_USUARIO;
    var valor = Number(inp_valor.value);

    fetch(`/avisos/update_img/${idUsuario}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            valorServer: valor + 1,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            alert('Imagem alterada com sucesso!')
            window.location.reload();
            select_img.style.display = 'none'
            sombra_main.style.display = 'none'

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

var lista_imgs = ["url(../img/personagens/cornifer_profile.jpg)", "url(../img/personagens/knight_profile.jpg)", "url(../img/personagens/hornet_profile.png)", "url(../img/personagens/shadow_profile.png)", "url(../img/personagens/grim_profile.jfif)"]

var lista_imgs_perfil = ["../img/personagens/cornifer_profile.jpg", "../img/personagens/knight_profile.jpg", "../img/personagens/hornet_profile.png", "../img/personagens/shadow_profile.png", "../img/personagens/grim_profile.jfif"]

function get_user() {
    var id_usuario = sessionStorage.ID_USUARIO;

    var corpo = {
        id_usuario: id_usuario
    }
    fetch(`/avisos/get_user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resultado) {

        console.log("ESTOU NO THEN DO get_user()!")
        if (resultado.ok) {
            resultado.json().then(function (resultado) {
                console.log("Dados recebidos do Perfil: ", JSON.stringify(resultado));

                resultado[0]
                console.log(resultado[0].username);

                nome_usuario.innerHTML = resultado[0].username;
                span_nome.innerHTML = resultado[0].nome;
                span_email.innerHTML = resultado[0].email;
                span_estado.innerHTML = resultado[0].estado;
                span_nick.innerHTML = resultado[0].username;
                profile_pic.src = lista_imgs_perfil[Number(resultado[0].fkPersonagem) - 1];
                pic_grande.src = lista_imgs_perfil[Number(resultado[0].fkPersonagem) - 1];


            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resultado));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
}

var duracao = 0;

function get_vid() {
    var id_usuario = sessionStorage.ID_USUARIO;

    var corpo = {
        id_usuario: id_usuario
    }
    fetch(`/avisos/get_vid`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resultado) {

        console.log("ESTOU NO THEN DO get_vid()!")
        if (resultado.ok) {

            if (resultado.status == 204) {
                div_video.style.display = 'none'
            }

            resultado.json().then(function (resultado) {
                console.log("Dados recebidos do Perfil: ", JSON.stringify(resultado));

                var tabela = document.getElementById("table_leader");
                tabela.innerHTML = "";

                var tr_tabela_main = document.createElement("tr");
                var td_tipo_main = document.createElement("td");
                var td_time_main = document.createElement("td");
                var td_data_main = document.createElement("td");
                var td_link_main = document.createElement("td");

                tabela.appendChild(tr_tabela_main);
                tr_tabela_main.appendChild(td_tipo_main);
                tr_tabela_main.appendChild(td_time_main);
                tr_tabela_main.appendChild(td_data_main);
                tr_tabela_main.appendChild(td_link_main);

                td_tipo_main.classList.add('td_last_rigth_top', 'td_main');
                td_time_main.className = 'td_main';
                td_data_main.className = 'td_main';
                td_link_main.classList.add('td_last_left_top', 'td_main');

                td_tipo_main.innerHTML = 'Tipo';
                td_time_main.innerHTML = 'Tempo';
                td_data_main.innerHTML = 'Data';
                td_link_main.innerHTML = 'Link';

                for (let i = 0; i < resultado.length; i++) {
                    var publicacao = resultado[i];


                    // criando e manipulando elementos do HTML via JavaScript
                    var tr_tabela = document.createElement("tr");
                    var td_tipo = document.createElement("td");
                    var td_time = document.createElement("td");
                    var td_data = document.createElement("td");
                    var td_link = document.createElement("td");

                    td_data.className = 'td_hora'

                    if (i % 2 == 0) {
                        td_tipo.style.backgroundColor = '#0c2b36'
                        td_time.style.backgroundColor = '#0c2b36'
                        td_data.style.backgroundColor = '#0c2b36'
                        td_link.style.backgroundColor = '#0c2b36'
                    }

                    tabela.appendChild(tr_tabela);
                    tr_tabela.appendChild(td_tipo);
                    tr_tabela.appendChild(td_time);
                    tr_tabela.appendChild(td_data);
                    tr_tabela.appendChild(td_link);

                    duracao = publicacao.duracao;

                    var string = "" + duracao / 60;
                    if (duracao < 599) {
                        var decimal = string - Number(string[0]);
                        var total = decimal * 60;
                        var res = string - decimal + "m " + (total.toFixed() + "s");
                    }

                    else if (duracao >= 3600) {
                        string = '' + Number(string) / 60;
                        var hora = string[0];
                        var calc_minuto = ((Number(string) - Number(hora)) * 60);
                        if (calc_minuto < 10) {
                            var c = calc_minuto + ''
                            var minuto = c[0];
                        }
                        else {
                            var c = calc_minuto + ''
                            var minuto = c[0] + c[1]
                        }
                        var segundo = (calc_minuto - Number(minuto)) * 60;

                        var res = hora + 'h ' + minuto + 'm ' + segundo.toFixed() + 's '
                    }
                    else {
                        decimal = string - Number(string[0] + string[1]);
                        var total = decimal * 60;
                        var res = string - decimal + "m " + (total.toFixed() + "s");
                    }

                    td_time.innerHTML = res;

                    td_tipo.innerHTML = publicacao.tipo;
                    td_data.innerHTML = publicacao.data;
                    td_link.innerHTML = `<a target='blank' href='${publicacao.link}'><img style="width: 15%; margin-top: 3%;" src="./img/icons/video.png"> </a>`

                    if (i == resultado.length - 1) {
                        td_tipo.className = 'td_last_rigth_bottom'
                        td_link.className = 'td_last_left_bottom'
                    }
                }

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resultado));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
}

var lista_qtdrun = [];
var lista_nomerun = [];

function get_graf_run() {

    fetch("/avisos/get_graf_run").then(function (resposta) {
        if (resposta.ok) {

            if (resposta.status == 204) {
                div_run.style.display = 'none'
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                for(let c = 0; c < resposta.length; c++){
                    lista_qtdrun.push(resposta[c].qtd);
                    lista_nomerun.push(resposta[c].tipo);
                }
    
                graf1();

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

var lista_nomeper = [];
var lista_qtdper = [];

function get_graf_per() {

    fetch("/avisos/get_graf_per").then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                
                for(let c = 0; c < resposta.length; c++){
                    lista_nomeper.push(resposta[c].nome);
                    lista_qtdper.push(resposta[c].qtd);
                }

                graf2();

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

function graf1() {
    const data = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [
                '#ec9c47',
                '#AB4E68',
                '#0C1618',
                '#32936F',
                '#2274A5'
            ],
            hoverOffset: 4
        }]
    };

    for(let c = 0; c < lista_nomerun.length; c++){
        data.labels.push(lista_nomerun[c]);
        data.datasets[0].data.push(lista_qtdrun[c]);
    }

    const config = {
        type: 'pie',
        data: data,
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}

function graf2() {

    const data = {
        labels: [],
        datasets: [{
            label: 'My First Dataset',
            data: [],
            backgroundColor: [
                '#ec9c47',
                '#AB4E68',
                '#0C1618',
                '#32936F',
                '#2274A5'
            ],
            hoverOffset: 4
        }]
    };

    for(let c = 0; c < lista_nomeper.length; c++){
        data.labels.push(lista_nomeper[c]);
        data.datasets[0].data.push(lista_qtdper[c]);
    }

    const config = {
        type: 'pie',
        data: data,
    };

    const myChart = new Chart(
        document.getElementById('myChart2'),
        config
    );
}