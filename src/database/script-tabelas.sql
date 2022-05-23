create database hollow_world;

use hollow_world;

create table personagem(
	idPersonagem int primary key auto_increment,
    nome varchar(40)
);

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(60),
    email varchar(100) unique,
    cep char(8),
    estado char(2),
    senha varchar(100),
    username varchar(20) unique,
    primeiro_login char(1) default 's',
    fkPersonagem int,
    foreign key(fkPersonagem) references personagem(idPersonagem)
);

create table video(
	idVideo int primary key auto_increment,
    duracao int,
    tipo varchar(20),
    dataHora datetime default current_timestamp,
    link varchar(200) unique,
    estado varchar(40) default 'pendente',
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario)
);

insert into personagem(nome) values
	('Cornifer'),
    ('Knight'),
    ('Hornet'),
    ('Shadow'),
    ('Grim');