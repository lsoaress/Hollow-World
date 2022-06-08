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
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario)
);

create table comentario(
	idComentario int primary key auto_increment,
    descricao varchar(200),
    fkUsuario1 int,
    fkUsuario2 int,
    fkResposta int,
    foreign key (fkUsuario1) references usuario(idUsuario),
    foreign key (fkUsuario2) references usuario(idUsuario),
    foreign key (fkResposta) references comentario(idComentario),
    dataHora datetime default current_timestamp
);

insert into comentario(descricao, fkUsuario1, fkUsuario2) values

('aa',2,1),
('aa',2,1),
('aa',2,3),
('aa',2,4);

select descricao, fkUsuario1, fkUsuario2 from comentario join usuario on fkUsuario1 = idUsuario where (fkUsuario1 = 1 and fkUsuario2 = 2) or (fkUsuario1 = 2 and fkUsuario2 = 1);

insert into personagem(nome) values
	('Cornifer'),
    ('Knight'),
    ('Hornet'),
    ('Shadow'),
    ('Grim');
    
select * from usuario;