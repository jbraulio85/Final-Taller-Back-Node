create table enunciado
(
	idEnunciado int primary key auto_increment,
    nombreEnunciado varchar(128),
    descripcionEnunciado text
)engine = innodb;

create table asignacionEnunciado
(
	carne int not null primary key unique,
    idEnunciado int,
    foreign key (idEnunciado) references enunciado (idEnunciado)
);

delimiter $$
create procedure sp_agregarEnunciado(in _nombreEnunciado varchar(128), in _descripcionEnunciado text)
begin
	insert into enunciado (nombreEnunciado, descripcionEnunciado) values (_nombreEnunciado, _descripcionEnunciado);
end$$
delimiter ;

delimiter $$
create procedure sp_registrarAsignacionEnunciado(in _carne int, in _idEnunciado int)
begin
	insert into asignacionEnunciado (carne, idEnunciado) values (_carne, _idEnunciado);
end$$
delimiter ;

delimiter $$
create procedure sp_buscarEnunciado(in _idEnunciado int)
begin
	select * from enunciado where enunciado.idEnunciado = _idEnunciado;
end$$
delimiter ;