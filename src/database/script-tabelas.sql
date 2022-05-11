create database hollow_world;

use hollow_world;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(60),
    email varchar(100),
    cep char(8),
    estado char(2),
    senha varchar(100),
    username varchar(20)
);