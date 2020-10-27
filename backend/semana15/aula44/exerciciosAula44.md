##EXERCICIO1
 CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);
/*A-)
CREATE TABLE:cria uma tabela.
Id, NAME, Salary, birth_date e gender: São as colunas da tabela .
VARCHAR(255):SERIA UM VALOR STRING COM A quantidade de caracteres.
PRIMARY KEY: significa que aquela coluna é uma chave primaria e não pode se repetir.
NOT NULL: a coluna não pode ser nula, ou sem valor.
DATE`: é um tipo de dado.
*/

/*B-)
SHOW DATABASES;  mostra o nome do schema que estamos usando.
SHOW TABLES: mostra o nome de todas as tablelas do schema*/

/*C-)
DESCRIBE Actor; mostra a tabela com suas informações, nome das colunas, tipo de dados, restrições e seus valores.*/

##EXERCICIO2
INSERT INTO Actor( id, name, salary, birth_date, gender )
VALUES(
	  "001",
      "Tony Ramos",
      400000,
	  "1948-08-25", 
	  "male"
);

/*A-)*/ 
INSERT INTO Actor(id , name , salary , birth_date , gender)
VALUES(
	"002",
    "Glória Pires",
	 1200000,
     "1996-08-23",
     "famele"
);

/*B-)
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.016 sec
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' 0,016 seg

 o erro diz que não podemos duplicar uma primary key, pois ele é unico.
*/

/*C-)
 Error Code: 1136. Column count doesn't match value count at row 1	0.266 sec
 Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1 0,266 s
 O codigo da erro pois faltaram dois parametros( birth_date , gender) .
*/
INSERT INTO Actor (id, name, salary,  birth_date , gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

/*D-)
Error Code: 1364. Field 'name' doesn't have a default value	0.015 sec
Código de erro: 1364. O campo 'nome' não tem um valor padrão 0,015 seg.
O codigo da erro pois o parametro de name não foi passado*/

INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Maria Casadevall",
  400000,
  "1949-04-18", 
  "male"
);

/*E-)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.016 sec
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1 0,016 s Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1 0,016 s
falta colocar aspas dupla na data.
*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

/*F-)*/
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
	"006",
    "Caio Castro",
    999999.99,
    "1989-01-22",
    "male"
);

INSERT INTO Actor(id, name , salary, birth_date, gender)
VALUES(
	"007",
    "Grazi Massafera",
    100000,
    " 1982-06-28",
    "female"
);

INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
	"008",
    "Cauã Reymond",
    2000000,
    "1980-05-20",
    "male"
);

/*EXERCICIO3*/

/*A-)SELECT * FROM Actor WHERE gender = "female"*/

/*B-)SELECT name, salary FROM Actor WHERE name ="Tony Ramos" */

/*C-)SELECT * FROM Actor WHERE gender= "invalid"
 não retorna nada, pois nenhuma coluna possui o valor informado*/
 
 /*D-) SELECT * FROM Actor WHERE salary < 500.000*/

/*E-) 
 Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' 0,016 s
 o nome da coluna estar escrito errado, "nome" -> "name"
 
 SELECT id, name from Actor WHERE id = "002"
 */

/*EXERCICIO4*/
/*A-)
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
Busca por todas as informações dos atores que tenha a inicial do nome "A" ou "J", e que recebam um salário maior que 300 mil. 
*/

/*B-)
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 35000000*/

/*C-)SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%") */

/*D-)
SELECT * FROM Actor WHERE (
name LIKE "%G%" OR
name LIKE "%g%" OR
name LIKE "%A%" OR
name LIKE "%a%" ) AND 
(salary BETWEEN 350000 AND 900000);
*/

/*EXERCICIO5*/

CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY , 
title VARCHAR(255) NOT NULL UNIQUE, 
 synopsis TEXT NOT NULL, 
 release_Date DATE NOT NULL, 
 rating INT NOT NULL);
 
 /*A-)cria uma tabela com as colunas: id(inteiro e chave primaria), name(string, não vazia), sinopse(tipo texto),
release_date(uma data não vazia) e ranking(um numero inteiro)*/

/*B-)*/
 INSERT INTO Movie (id, title, synopsis, release_Date, rating)
 VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
     7
);
/*C-)*/
INSERT INTO Movie(id, title, synopsis, release_Date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
  );
  /*D-)*/
  INSERT INTO Movie (id, title,synopsis,release_Date, rating)
  VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
  );
/*E-)*/
INSERT INTO Movie (id, title,synopsis,release_Date, rating)
  VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
     9
  );

/*EXERCICIO6*/
  /*A-) SELECT id, title, rating FROM Movie WHERE id ="003"*/
  
 /*B-) SELECT * FROM Movie WHERE ID ="001"*/ 
 
  /*C-) SELECT id, title, synopsis FROM Movie WHERE rating > 7;*/ 

/*EXERCICIO7*/
 /*A-) SELECT * FROM Movie WHERE title LIKE "%vida%"*/ 
 
/*B-)
SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
*/

/*C-)SELECT * FROM Movie WHERE release_Date <"2020-05-04";*/

/*D-)SELECT * FROM Movie
WHERE release_Date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;*/
