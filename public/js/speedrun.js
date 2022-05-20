function back_start(){
    window.location = 'speedrun.html#inicio'
}

function back_login(){
    window.location = 'index.html'
}

function foward_sub(){
    window.location = 'submit.html'
}

function call_name(){
    nome_usuario.innerHTML = sessionStorage.USERNAME;
}


// API

function get_any() {
    //aguardar();
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
    
                    tabela.appendChild(tr_tabela);
                    tr_tabela.appendChild(td_position);
                    tr_tabela.appendChild(td_username);
                    tr_tabela.appendChild(td_time);
                    tr_tabela.appendChild(td_data);
                    tr_tabela.appendChild(td_link);
    
                    td_position.innerHTML = i + 1;
                    td_username.innerHTML = publicacao.username;
                    td_time.innerHTML = publicacao.duracao;
                    
                    let trocar = '';
                    let data = publicacao.datahora;

                    for(let c = 10; c < data.length; c++){
                        trocar += data[c]
                    }

                    data = data.replace(trocar, '');

                    td_data.innerHTML = data;
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
