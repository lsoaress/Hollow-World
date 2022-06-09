function back_start() {
    window.location = 'speedrun.html#inicio'
}

function back_login() {
    sessionStorage.clear();
    setTimeout(function () {
        window.location = 'index.html'
        alert('Volte Sempre!')
    }, 200)
}

function foward_sub() {
    window.location = 'submit.html'
}

function validar_login() {
    if (sessionStorage.length == 0) {
        select_img.style.display = 'none';
        sombra_main.style.display = 'none';
        div_usuario.style.visibility = 'hidden'
        div_comentario.style.display = 'none'
    }
    else {
        call_image()
    }
}

function go_perfil() {
    window.location = 'perfil.html'
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
                profile_pic.src = lista_imgs_perfil[Number(resultado[0].fkPersonagem) - 1];

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resultado));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
}

function call_image() {
    if (sessionStorage.PRIMEIRO_LOGIN == 's') {
        div_usuario.style.visibility = 'hidden'
        select_img.style.display = 'flex'
        sombra_main.style.display = 'block'
    }
}

function change_img() {
    num = Number(inp_valor.value).toFixed();
    seletor.style.backgroundImage = lista_imgs[num];
    seletor.style.backgroundSize = 'cover'
}


// API

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

            alert('Imagem escolhida com sucesso!')
            window.location.reload();
            sessionStorage.PRIMEIRO_LOGIN = 'n'

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

var duracao = 0;

function get_any() {

    div_any.style.color = '#FFFFFF';
    div_any.style.backgroundColor = '#24455abf';

    div_apb.style.color = '#9f9d9d';
    div_apb.style.backgroundColor = '#0c1f36db';

    div_all.style.color = '#9f9d9d';
    div_all.style.backgroundColor = '#0c1f36db';

    div_true.style.color = '#9f9d9d';
    div_true.style.backgroundColor = '#0c1f36db';

    div_conq.style.color = '#9f9d9d';
    div_conq.style.backgroundColor = '#0c1f36db';

    fetch("/avisos/get_any").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var tabela = document.getElementById('table_leader');
                tabela.innerHTML = '';
                var tr_tabela = document.createElement("tr");
                var td_position = document.createElement("td");
                var td_username = document.createElement("td");
                var td_time = document.createElement("td");
                var td_data = document.createElement("td");
                var td_link = document.createElement("td");

                tabela.appendChild(tr_tabela);
                tr_tabela.appendChild(td_position);
                tr_tabela.appendChild(td_username);
                tr_tabela.appendChild(td_time);
                tr_tabela.appendChild(td_data);
                tr_tabela.appendChild(td_link);

                td_position.className = 'td_main'
                td_username.className = 'td_main'
                td_time.className = 'td_main'
                td_data.className = 'td_main'
                td_link.className = 'td_main'

                td_position.innerHTML = 'P';
                td_username.innerHTML = 'Usuário';
                td_time.innerHTML = 'Tempo';
                td_data.innerHTML = 'Data';
                td_link.innerHTML = 'Link'
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var tabela = document.getElementById("table_leader");
                tabela.innerHTML = "";

                var tr_tabela_main = document.createElement("tr");
                var td_position_main = document.createElement("td");
                var td_username_main = document.createElement("td");
                var td_time_main = document.createElement("td");
                var td_data_main = document.createElement("td");
                var td_link_main = document.createElement("td");

                tabela.appendChild(tr_tabela_main);
                tr_tabela_main.appendChild(td_position_main);
                tr_tabela_main.appendChild(td_username_main);
                tr_tabela_main.appendChild(td_time_main);
                tr_tabela_main.appendChild(td_data_main);
                tr_tabela_main.appendChild(td_link_main);

                td_position_main.className = 'td_main'
                td_username_main.className = 'td_main'
                td_time_main.className = 'td_main'
                td_data_main.className = 'td_main'
                td_link_main.className = 'td_main'

                td_position_main.innerHTML = 'P';
                td_username_main.innerHTML = 'Usuário';
                td_time_main.innerHTML = 'Tempo';
                td_data_main.innerHTML = 'Data';
                td_link_main.innerHTML = 'Link'

                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];


                    // criando e manipulando elementos do HTML via JavaScript
                    var tr_tabela = document.createElement("tr");
                    var td_position = document.createElement("td");
                    var td_username = document.createElement("td");
                    var td_time = document.createElement("td");
                    var td_data = document.createElement("td");
                    var td_link = document.createElement("td");

                    td_data.className = 'td_hora'

                    if (i % 2 == 0) {
                        td_position.style.backgroundColor = '#0c2b36'
                        td_username.style.backgroundColor = '#0c2b36'
                        td_time.style.backgroundColor = '#0c2b36'
                        td_data.style.backgroundColor = '#0c2b36'
                        td_link.style.backgroundColor = '#0c2b36'
                    }

                    tabela.appendChild(tr_tabela);
                    tr_tabela.appendChild(td_position);
                    tr_tabela.appendChild(td_username);
                    tr_tabela.appendChild(td_time);
                    tr_tabela.appendChild(td_data);
                    tr_tabela.appendChild(td_link);

                    td_position.innerHTML = i + 1;
                    td_username.innerHTML = publicacao.username;
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

                    td_data.innerHTML = publicacao.data;
                    td_link.innerHTML = `<a target='blank' href='${publicacao.link}'><img style="width: 15%; margin-top: 3%;" src="./img/icons/video.png"> </a>`
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function get_apb() {

    div_any.style.color = '#9f9d9d';
    div_any.style.backgroundColor = '#0c1f36db';

    div_apb.style.color = '#FFFFFF';
    div_apb.style.backgroundColor = '#24455abf';

    div_all.style.color = '#9f9d9d';
    div_all.style.backgroundColor = '#0c1f36db';

    div_true.style.color = '#9f9d9d';
    div_true.style.backgroundColor = '#0c1f36db';

    div_conq.style.color = '#9f9d9d';
    div_conq.style.backgroundColor = '#0c1f36db';

    fetch("/avisos/get_apb").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var tabela = document.getElementById('table_leader');
                tabela.innerHTML = '';
                var tr_tabela = document.createElement("tr");
                var td_position = document.createElement("td");
                var td_username = document.createElement("td");
                var td_time = document.createElement("td");
                var td_data = document.createElement("td");
                var td_link = document.createElement("td");

                tabela.appendChild(tr_tabela);
                tr_tabela.appendChild(td_position);
                tr_tabela.appendChild(td_username);
                tr_tabela.appendChild(td_time);
                tr_tabela.appendChild(td_data);
                tr_tabela.appendChild(td_link);

                td_position.className = 'td_main'
                td_username.className = 'td_main'
                td_time.className = 'td_main'
                td_data.className = 'td_main'
                td_link.className = 'td_main'

                td_position.innerHTML = 'P';
                td_username.innerHTML = 'Usuário';
                td_time.innerHTML = 'Tempo';
                td_data.innerHTML = 'Data';
                td_link.innerHTML = 'Link'
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var tabela = document.getElementById("table_leader");
                tabela.innerHTML = "";

                var tr_tabela_main = document.createElement("tr");
                var td_position_main = document.createElement("td");
                var td_username_main = document.createElement("td");
                var td_time_main = document.createElement("td");
                var td_data_main = document.createElement("td");
                var td_link_main = document.createElement("td");

                tabela.appendChild(tr_tabela_main);
                tr_tabela_main.appendChild(td_position_main);
                tr_tabela_main.appendChild(td_username_main);
                tr_tabela_main.appendChild(td_time_main);
                tr_tabela_main.appendChild(td_data_main);
                tr_tabela_main.appendChild(td_link_main);

                td_position_main.className = 'td_main'
                td_username_main.className = 'td_main'
                td_time_main.className = 'td_main'
                td_data_main.className = 'td_main'
                td_link_main.className = 'td_main'

                td_position_main.innerHTML = 'P';
                td_username_main.innerHTML = 'Usuário';
                td_time_main.innerHTML = 'Tempo';
                td_data_main.innerHTML = 'Data';
                td_link_main.innerHTML = 'Link'

                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    // criando e manipulando elementos do HTML via JavaScript
                    var tr_tabela = document.createElement("tr");
                    var td_position = document.createElement("td");
                    var td_username = document.createElement("td");
                    var td_time = document.createElement("td");
                    var td_data = document.createElement("td");
                    var td_link = document.createElement("td");

                    td_data.className = 'td_hora'

                    if (i % 2 == 0) {
                        td_position.style.backgroundColor = '#0c2b36'
                        td_username.style.backgroundColor = '#0c2b36'
                        td_time.style.backgroundColor = '#0c2b36'
                        td_data.style.backgroundColor = '#0c2b36'
                        td_link.style.backgroundColor = '#0c2b36'
                    }

                    tabela.appendChild(tr_tabela);
                    tr_tabela.appendChild(td_position);
                    tr_tabela.appendChild(td_username);
                    tr_tabela.appendChild(td_time);
                    tr_tabela.appendChild(td_data);
                    tr_tabela.appendChild(td_link);

                    td_position.innerHTML = i + 1;
                    td_username.innerHTML = publicacao.username;
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

                    td_data.innerHTML = publicacao.data;
                    td_link.innerHTML = `<a target='blank' href='${publicacao.link}'><img style="width: 15%; margin-top: 3%;" src="./img/icons/video.png"> </a>`
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function get_all() {

    div_any.style.color = '#9f9d9d';
    div_any.style.backgroundColor = '#0c1f36db';

    div_apb.style.color = '#9f9d9d';
    div_apb.style.backgroundColor = '#0c1f36db';

    div_all.style.color = '#FFFFFF';
    div_all.style.backgroundColor = '#24455abf';

    div_true.style.color = '#9f9d9d';
    div_true.style.backgroundColor = '#0c1f36db';

    div_conq.style.color = '#9f9d9d';
    div_conq.style.backgroundColor = '#0c1f36db';

    fetch("/avisos/get_all").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var tabela = document.getElementById('table_leader');
                tabela.innerHTML = '';
                var tr_tabela = document.createElement("tr");
                var td_position = document.createElement("td");
                var td_username = document.createElement("td");
                var td_time = document.createElement("td");
                var td_data = document.createElement("td");
                var td_link = document.createElement("td");

                tabela.appendChild(tr_tabela);
                tr_tabela.appendChild(td_position);
                tr_tabela.appendChild(td_username);
                tr_tabela.appendChild(td_time);
                tr_tabela.appendChild(td_data);
                tr_tabela.appendChild(td_link);

                td_position.className = 'td_main'
                td_username.className = 'td_main'
                td_time.className = 'td_main'
                td_data.className = 'td_main'
                td_link.className = 'td_main'

                td_position.innerHTML = 'P';
                td_username.innerHTML = 'Usuário';
                td_time.innerHTML = 'Tempo';
                td_data.innerHTML = 'Data';
                td_link.innerHTML = 'Link'
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var tabela = document.getElementById("table_leader");
                tabela.innerHTML = "";

                var tr_tabela_main = document.createElement("tr");
                var td_position_main = document.createElement("td");
                var td_username_main = document.createElement("td");
                var td_time_main = document.createElement("td");
                var td_data_main = document.createElement("td");
                var td_link_main = document.createElement("td");

                tabela.appendChild(tr_tabela_main);
                tr_tabela_main.appendChild(td_position_main);
                tr_tabela_main.appendChild(td_username_main);
                tr_tabela_main.appendChild(td_time_main);
                tr_tabela_main.appendChild(td_data_main);
                tr_tabela_main.appendChild(td_link_main);

                td_position_main.className = 'td_main'
                td_username_main.className = 'td_main'
                td_time_main.className = 'td_main'
                td_data_main.className = 'td_main'
                td_link_main.className = 'td_main'

                td_position_main.innerHTML = 'P';
                td_username_main.innerHTML = 'Usuário';
                td_time_main.innerHTML = 'Tempo';
                td_data_main.innerHTML = 'Data';
                td_link_main.innerHTML = 'Link'

                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    // criando e manipulando elementos do HTML via JavaScript
                    var tr_tabela = document.createElement("tr");
                    var td_position = document.createElement("td");
                    var td_username = document.createElement("td");
                    var td_time = document.createElement("td");
                    var td_data = document.createElement("td");
                    var td_link = document.createElement("td");

                    td_data.className = 'td_hora'

                    if (i % 2 == 0) {
                        td_position.style.backgroundColor = '#0c2b36'
                        td_username.style.backgroundColor = '#0c2b36'
                        td_time.style.backgroundColor = '#0c2b36'
                        td_data.style.backgroundColor = '#0c2b36'
                        td_link.style.backgroundColor = '#0c2b36'
                    }

                    tabela.appendChild(tr_tabela);
                    tr_tabela.appendChild(td_position);
                    tr_tabela.appendChild(td_username);
                    tr_tabela.appendChild(td_time);
                    tr_tabela.appendChild(td_data);
                    tr_tabela.appendChild(td_link);

                    td_position.innerHTML = i + 1;
                    td_username.innerHTML = publicacao.username;
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

                    td_data.innerHTML = publicacao.data;
                    td_link.innerHTML = `<a target='blank' href='${publicacao.link}'><img style="width: 15%; margin-top: 3%;" src="./img/icons/video.png"> </a>`
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function get_true() {

    div_any.style.color = '#9f9d9d';
    div_any.style.backgroundColor = '#0c1f36db';

    div_apb.style.color = '#9f9d9d';
    div_apb.style.backgroundColor = '#0c1f36db';

    div_all.style.color = '#9f9d9d';
    div_all.style.backgroundColor = '#0c1f36db';

    div_true.style.color = '#FFFFFF';
    div_true.style.backgroundColor = '#24455abf';

    div_conq.style.color = '#9f9d9d';
    div_conq.style.backgroundColor = '#0c1f36db';

    fetch("/avisos/get_true").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var tabela = document.getElementById('table_leader');
                tabela.innerHTML = '';
                var tr_tabela = document.createElement("tr");
                var td_position = document.createElement("td");
                var td_username = document.createElement("td");
                var td_time = document.createElement("td");
                var td_data = document.createElement("td");
                var td_link = document.createElement("td");

                tabela.appendChild(tr_tabela);
                tr_tabela.appendChild(td_position);
                tr_tabela.appendChild(td_username);
                tr_tabela.appendChild(td_time);
                tr_tabela.appendChild(td_data);
                tr_tabela.appendChild(td_link);

                td_position.className = 'td_main'
                td_username.className = 'td_main'
                td_time.className = 'td_main'
                td_data.className = 'td_main'
                td_link.className = 'td_main'

                td_position.innerHTML = 'P';
                td_username.innerHTML = 'Usuário';
                td_time.innerHTML = 'Tempo';
                td_data.innerHTML = 'Data';
                td_link.innerHTML = 'Link'
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var tabela = document.getElementById("table_leader");
                tabela.innerHTML = "";

                var tr_tabela_main = document.createElement("tr");
                var td_position_main = document.createElement("td");
                var td_username_main = document.createElement("td");
                var td_time_main = document.createElement("td");
                var td_data_main = document.createElement("td");
                var td_link_main = document.createElement("td");

                tabela.appendChild(tr_tabela_main);
                tr_tabela_main.appendChild(td_position_main);
                tr_tabela_main.appendChild(td_username_main);
                tr_tabela_main.appendChild(td_time_main);
                tr_tabela_main.appendChild(td_data_main);
                tr_tabela_main.appendChild(td_link_main);

                td_position_main.className = 'td_main'
                td_username_main.className = 'td_main'
                td_time_main.className = 'td_main'
                td_data_main.className = 'td_main'
                td_link_main.className = 'td_main'

                td_position_main.innerHTML = 'P';
                td_username_main.innerHTML = 'Usuário';
                td_time_main.innerHTML = 'Tempo';
                td_data_main.innerHTML = 'Data';
                td_link_main.innerHTML = 'Link'

                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    // criando e manipulando elementos do HTML via JavaScript
                    var tr_tabela = document.createElement("tr");
                    var td_position = document.createElement("td");
                    var td_username = document.createElement("td");
                    var td_time = document.createElement("td");
                    var td_data = document.createElement("td");
                    var td_link = document.createElement("td");

                    td_data.className = 'td_hora'

                    if (i % 2 == 0) {
                        td_position.style.backgroundColor = '#0c2b36'
                        td_username.style.backgroundColor = '#0c2b36'
                        td_time.style.backgroundColor = '#0c2b36'
                        td_data.style.backgroundColor = '#0c2b36'
                        td_link.style.backgroundColor = '#0c2b36'
                    }

                    tabela.appendChild(tr_tabela);
                    tr_tabela.appendChild(td_position);
                    tr_tabela.appendChild(td_username);
                    tr_tabela.appendChild(td_time);
                    tr_tabela.appendChild(td_data);
                    tr_tabela.appendChild(td_link);

                    td_position.innerHTML = i + 1;
                    td_username.innerHTML = publicacao.username;
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

                    td_data.innerHTML = publicacao.data;
                    td_link.innerHTML = `<a target='blank' href='${publicacao.link}'><img style="width: 15%; margin-top: 3%;" src="./img/icons/video.png"> </a>`
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function get_conq() {

    div_any.style.color = '#9f9d9d';
    div_any.style.backgroundColor = '#0c1f36db';

    div_apb.style.color = '#9f9d9d';
    div_apb.style.backgroundColor = '#0c1f36db';

    div_all.style.color = '#9f9d9d';
    div_all.style.backgroundColor = '#0c1f36db';

    div_true.style.color = '#9f9d9d';
    div_true.style.backgroundColor = '#0c1f36db';

    div_conq.style.color = '#FFFFFF';
    div_conq.style.backgroundColor = '#24455abf';

    fetch("/avisos/get_conq").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var tabela = document.getElementById('table_leader');
                tabela.innerHTML = '';
                var tr_tabela = document.createElement("tr");
                var td_position = document.createElement("td");
                var td_username = document.createElement("td");
                var td_time = document.createElement("td");
                var td_data = document.createElement("td");
                var td_link = document.createElement("td");

                tabela.appendChild(tr_tabela);
                tr_tabela.appendChild(td_position);
                tr_tabela.appendChild(td_username);
                tr_tabela.appendChild(td_time);
                tr_tabela.appendChild(td_data);
                tr_tabela.appendChild(td_link);

                td_position.className = 'td_main'
                td_username.className = 'td_main'
                td_time.className = 'td_main'
                td_data.className = 'td_main'
                td_link.className = 'td_main'

                td_position.innerHTML = 'P';
                td_username.innerHTML = 'Usuário';
                td_time.innerHTML = 'Tempo';
                td_data.innerHTML = 'Data';
                td_link.innerHTML = 'Link'
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var tabela = document.getElementById("table_leader");
                tabela.innerHTML = "";

                var tr_tabela_main = document.createElement("tr");
                var td_position_main = document.createElement("td");
                var td_username_main = document.createElement("td");
                var td_time_main = document.createElement("td");
                var td_data_main = document.createElement("td");
                var td_link_main = document.createElement("td");

                tabela.appendChild(tr_tabela_main);
                tr_tabela_main.appendChild(td_position_main);
                tr_tabela_main.appendChild(td_username_main);
                tr_tabela_main.appendChild(td_time_main);
                tr_tabela_main.appendChild(td_data_main);
                tr_tabela_main.appendChild(td_link_main);

                td_position_main.className = 'td_main'
                td_username_main.className = 'td_main'
                td_time_main.className = 'td_main'
                td_data_main.className = 'td_main'
                td_link_main.className = 'td_main'

                td_position_main.innerHTML = 'P';
                td_username_main.innerHTML = 'Usuário';
                td_time_main.innerHTML = 'Tempo';
                td_data_main.innerHTML = 'Data';
                td_link_main.innerHTML = 'Link'

                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    // criando e manipulando elementos do HTML via JavaScript
                    var tr_tabela = document.createElement("tr");
                    var td_position = document.createElement("td");
                    var td_username = document.createElement("td");
                    var td_time = document.createElement("td");
                    var td_data = document.createElement("td");
                    var td_link = document.createElement("td");

                    td_data.className = 'td_hora'

                    if (i % 2 == 0) {
                        td_position.style.backgroundColor = '#0c2b36'
                        td_username.style.backgroundColor = '#0c2b36'
                        td_time.style.backgroundColor = '#0c2b36'
                        td_data.style.backgroundColor = '#0c2b36'
                        td_link.style.backgroundColor = '#0c2b36'
                    }

                    tabela.appendChild(tr_tabela);
                    tr_tabela.appendChild(td_position);
                    tr_tabela.appendChild(td_username);
                    tr_tabela.appendChild(td_time);
                    tr_tabela.appendChild(td_data);
                    tr_tabela.appendChild(td_link);

                    td_position.innerHTML = i + 1;
                    td_username.innerHTML = publicacao.username;
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

                    td_data.innerHTML = publicacao.data;
                    td_link.innerHTML = `<a target='blank' href='${publicacao.link}'><img style="width: 15%; margin-top: 3%;" src="./img/icons/video.png"> </a>`
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function open_user() {

    div_comentario.style.height = '60vh';
    div_comentario.style.top = '38vh';

    div_conversa.style.flexDirection = 'column';
    div_conversa.style.justifyContent = 'space-evenly';
    div_conversa.style.paddingTop = '6.5%';

    div_conversa.style.display = 'grid';
    div_conversa.style.gridGap = '1rem';
    div_conversa.style.gridTemplateColumns = '1fr';

    fetch("/usuarios/listar").then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                var conversa = document.getElementById("div_conversa");
                var close = document.createElement("img");
                conversa.innerHTML = "";
                conversa.appendChild(close)
                close.src = 'img/errado.png'
                close.className = 'fecha_conv'
                close.setAttribute('onclick', 'fechar_usuario()')

                for (let i = 0; i < resposta.length; i++) {
                    var perfil = resposta[i];
                    if (perfil.idUsuario == sessionStorage.ID_USUARIO) {
                        i++
                        perfil = resposta[i];
                        if (i == resposta.length) {
                            return false
                        }
                    }
                    // criando e manipulando elementos do HTML via JavaScript
                    var box = document.createElement("div");
                    var usuario = document.createElement("div");
                    var img = document.createElement("img");

                    box.className = 'box';
                    img.className = 'conversa_img';
                    usuario.className = 'div_c_usuario';

                    conversa.appendChild(box);
                    box.appendChild(img);
                    box.appendChild(usuario);

                    box.setAttribute('onclick', `abrir_chat(${perfil.idUsuario}, '${perfil.username}')`)

                    img.src = lista_imgs_perfil[perfil.fkPersonagem - 1];
                    usuario.innerHTML = perfil.username

                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

function fechar_usuario() {
    div_comentario.style.height = '6vh';
    div_comentario.style.top = '92%';

    div_conversa.innerHTML = '<span style="cursor: pointer;" onclick="open_user()">Conversar</span>';
    div_conversa.style.flexDirection = 'row';
    div_conversa.style.justifyContent = 'center';
    div_conversa.style.paddingTop = '0';
    div_conversa.style.display = 'flex';
}

function abrir_chat(fkResposta, destinatario) {

    div_chat.style.opacity = 1;
    div_chat.style.visibility = 'visible';
    div_chat.style.height = '58vh';
    div_chat.style.width = '21%';
    div_chat.style.left = '63%';
    div_chat.style.top = '40%';
    var idUsuario = sessionStorage.ID_USUARIO;
    div_chat_conversa.innerHTML = '';
    
    var chat = document.getElementById('div_chat_conversa');
    var div_destinatario = document.createElement('div');
    chat.appendChild(div_destinatario);
    div_destinatario.className = 'div_destinatario';
    div_destinatario.innerHTML = `<span>${destinatario}</span>`;
    var close = document.createElement("img");
    div_destinatario.appendChild(close);
    close.src = 'img/fechar.png';
    close.className = 'fechar_chat';
    close.setAttribute('onclick', 'fechar_chat()');
    
    var descricao = document.createElement('div');
    chat.appendChild(descricao);
    descricao.className = 'descricao';
    

    var inp = document.createElement('textarea');
    chat.appendChild(inp);
    inp.className = 'inp_chat';
    inp.id = 'inp_chat';

    var btn = document.createElement('button');
    chat.appendChild(btn);
    btn.className = 'btn_chat';
    btn.innerHTML = 'Enviar';
    btn.setAttribute('onclick', `enviar_msg(${fkResposta}, '${destinatario}')`)

    fetch(`/usuarios/abrir_chat/${fkResposta}&${idUsuario}`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                for(let c = 0; c < resposta.length; c++){   
                    var chat = resposta[c];
                    var div_desc = document.createElement('div');
                    descricao.appendChild(div_desc);
                    div_desc.className = 'div_desc'
                    if(chat.fkUsuario1 == idUsuario){
                        div_desc.style.alignSelf = 'flex-end';
                        div_desc.style.justifyContent = 'flex-end';
                    }
                    div_desc.innerHTML = chat.descricao;
                }

                descricao.scrollBy(0, window.innerHeight);
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
};


function fechar_chat(){
    div_chat.style.height = '6vh';
    div_chat.style.width = '21%';
    div_chat.style.left = '63%';
    div_chat.style.top = '93%';
    div_chat.style.opacity = 0;
    div_chat.style.visibility = 'hidden';
}

function enviar_msg(fkUsuario2, destinatario){
    var fkUsuario1 = sessionStorage.ID_USUARIO;
    var descricao = inp_chat.value

    if(descricao.trim() == ''){
        return false
    }

    fetch(`/usuarios/enviar_msg`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            fkUsuario1Server: fkUsuario1,
            fkUsuario2Server: fkUsuario2,
            descricaoServer: descricao,

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            abrir_chat(fkUsuario2, destinatario);
            btn_chat.value = ''

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}