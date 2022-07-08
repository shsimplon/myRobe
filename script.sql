CREATE TABLE user ( id int PRIMARY KEY, name varchar(30)  NOT NULL,
address varchar(255) NOT NULL,
email
varchar(20) UNIQUE NOT NULL,
password
varchar(60) NOT NULL,
phone
varchar(15) NOT NULL,
role
varchar(10) NOT NULL );


CREATE TABLE categorie 
( id int KEY, name_categorie varchar(30) NOT NULL ) ;


CREATE TABLE dress (
id int PRIMARY KEY , name varchar(30) NOT NULL, 
description
varchar(255) UNIQUE NOT NULL,
size
varchar(10) NOT NULL,
image
varchar(50) NOT NULL,
price
varchar(10) NOT NULL ,
 categorieId int,
CONSTRAINT fk_categorieId FOREIGN KEY (categorieId) REFERENCES categorie (id)
);


CREATE TABLE `dress_reservation` (
id int(36) NOT NULL,
 date_departure varchar(30) NOT NULL, 

reurn_date varchar(15) NOT NULL,
  dressId int(36) NOT NULL,
  reservationId int(36) NOT NULL,
    
  CONSTRAINT `FK_dressId` FOREIGN KEY (`dressId`) REFERENCES `dress` (`id`),
  CONSTRAINT `FK_reservationId` FOREIGN KEY (`reservationId`) REFERENCES `reservation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
