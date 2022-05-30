var database = require("../database/config");

// Minhas Configs

function cadastrar_video(link, tipo, duracao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_video(): ", link, tipo, duracao, idUsuario);
    var instrucao = `
        INSERT INTO video (link, tipo, duracao, fkUsuario) VALUES ('${link}', '${tipo}', '${duracao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function update_img(valor, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function update_img(): ", valor, idUsuario);
    var instrucao = `
        UPDATE usuario SET primeiro_login = 'n',
        fkPersonagem = '${valor}' where idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function get_user(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function get_user()");
    var instrucao = `
    select username, fkPersonagem, nome, email, estado from usuario where idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function get_vid(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function get_vid()");
    var instrucao = `
    select tipo, duracao, date_format(datahora, '%Y-%m-%d') as 'data', link from video where fkUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function get_any() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function get_any()");
    var instrucao = `
    select username, duracao, date_format(datahora, '%Y-%m-%d') as 'data', link from usuario join video on idUsuario = fkUsuario where tipo = 'ANY %' order by duracao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function get_apb() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function get_apb()");
    var instrucao = `
    select username, duracao, date_format(datahora, '%Y-%m-%d') as 'data', link from usuario join video on idUsuario = fkUsuario where tipo = '112% APB' order by duracao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function get_all() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function get_all()");
    var instrucao = `
    select username, duracao, date_format(datahora, '%Y-%m-%d') as 'data', link from usuario join video on idUsuario = fkUsuario where tipo = 'Todas Habilidades' order by duracao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function get_true() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function get_true()");
    var instrucao = `
    select username, duracao, date_format(datahora, '%Y-%m-%d') as 'data', link from usuario join video on idUsuario = fkUsuario where tipo = 'Final Verdadeiro' order by duracao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function get_conq() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function get_conq()");
    var instrucao = `
    select username, duracao, date_format(datahora, '%Y-%m-%d') as 'data', link from usuario join video on idUsuario = fkUsuario where tipo = 'Todas as conquista' order by duracao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function get_graf_run() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function get_graf_run()");
    var instrucao = `
    select tipo, count(idVideo) as qtd from video group by tipo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function get_graf_per() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function get_graf_per()");
    var instrucao = `
    select p.nome, count(u.idUsuario) as qtd from personagem as p join usuario as u on idPersonagem = fkPersonagem group by fkPersonagem;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    get_any,
    get_apb,
    get_all,
    get_true,
    get_conq,
    get_user,
    get_vid,
    get_graf_run,
    get_graf_per,
    update_img,
    cadastrar_video
}
