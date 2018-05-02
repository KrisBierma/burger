### Schema
Create database if not exists burgerDB;

Use burgerDB;

Create table if not exists burgers
(
id integer not null auto_increment,
burger_name varchar (30) not null,
devoured boolean,
primary key (id)
);