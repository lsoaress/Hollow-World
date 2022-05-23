function back_start() {
    window.location = 'speedrun.html#inicio'
}

function back_login() {
    sessionStorage.clear();
    setTimeout(function () {
        window.location = 'index.html'
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
    }
    else{
        call_image() 
    }
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
                profile_pic.src= lista_imgs_perfil[Number(resultado[0].fkPersonagem) - 1];

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