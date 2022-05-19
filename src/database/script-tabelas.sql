create database hollow_world;

use hollow_world;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(60),
    email varchar(100) unique,
    cep char(8),
    estado char(2),
    senha varchar(100),
    username varchar(20) unique
);

create table video(
	idVideo int primary key auto_increment,
    duracao int,
    tipo varchar(20),
    dataHora datetime default current_timestamp,
    link varchar(200) unique,
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario)
);