CREATE DATABASE smart_museum;
use smart_museum;

CREATE TABLE IF NOT EXISTS museum(
	id int not null auto_increment,
	name varchar(50) not null,
	location varchar(150) not null,
	address text (150) not null,
	postal_no int (5) not null,
	description text null,
	email text null,
	unique(name),
	primary key(id)
);

CREATE TABLE IF NOT EXISTS operator(
	id int not null auto_increment,
	name varchar(50) not null,
	is_admin boolean not null default 0,
	surname varchar (50) not null,
	username varchar(50) not null,
	password varchar(200) not null,
	email text not null,
	museum_id int not null,
	unique(username),
	primary key(id),
	FOREIGN KEY (museum_id) REFERENCES museum(id) 
);

CREATE TABLE IF NOT EXISTS evidence(
	id int not null auto_increment,
	creation_date datetime null,
	museum_id int not null,
	owner TINYTEXT default null,
	number INT(10) UNSIGNED default NULL,
	domain TEXT default NULL,
	type TINYTEXT default NULL,
	title TINYTEXT not NULL,
	material TINYTEXT default NULL,
	technique TEXT default NULL,
	culture TEXT default NULL,
	period TEXT default NULL,
	author TEXT NOT NULL,
	dimensions TEXT default NULL,
	weight INT(10) UNSIGNED default NULL,
	value TINYTEXT default NULL,
	other_data TEXT default NULL,
	scale_of_damage ENUM('1','2','3','4','5','6','7','8','9','10') default NULL,
	is_original boolean default NULL,
	origin_place TINYTEXT default NULL,
	storage_location TINYTEXT default NULL,
	historic_information TEXT default NULL,
	description TEXT NOT NULL,
	restauration TEXT default NULL,
	operator_id int not null,
	is_public boolean default 0,
	primary key(id,possessor_id),
	foreign key(operator_id) references operator(id),
	foreign key(possessor_id) references museum(id)
);

CREATE TABLE IF NOT EXISTS show_flags(
	id int not null auto_increment,
	show_owner boolean not null default 0,
	show_possessor boolean not null default 0,
    show_number boolean not null default 0,
	show_domain boolean not null default 0,
	show_type boolean not null default 0,
	show_material boolean not null default 0,
	show_technique boolean not null default 0,
	show_culture boolean not null default 0,
	show_period boolean not null default 0,
	show_value boolean not null default 0,
	show_other_data boolean not null default 0,
	show_scale_of_damage boolean not null default 0,
	show_is_original boolean not null default 0,
	show_origin_place boolean not null default 0,
	show_storage_location boolean not null default 0,
	show_historic_information boolean not null default 0,
	show_description boolean not null default 0,
	show_restauration boolean not null default 0,
	show_extended_description boolean not null default 0,
	show_short_description boolean not null default 0,
	show_author boolean not null default 0,
	evidence_id int not null,
	primary key(id),
	foreign key(evidence_id) references evidence(id)
);

CREATE TABLE IF NOT EXISTS media(
	id int not null auto_increment,
	url varchar (500) not null,
	type varchar (50) default null,
	shows boolean not null default 0,
	evidence_id int not null,
	primary key(id),
	foreign key(evidence_id) references evidence(id)
);




