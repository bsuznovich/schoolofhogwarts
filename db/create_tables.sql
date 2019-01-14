CREATE TABLE student
(
id serial PRIMARY KEY,
firstname VARCHAR(150) NOT NULL,                        
lastname VARCHAR(150) NOT NULL,
year VARCHAR(1) NOT NULL,
houseid INTEGER NOT NULL references house(id),
points VARCHAR(3) NOT NULL,
picture TEXT,
email VARCHAR(150) NOT NULL,
hash VARCHAR(150)
);

CREATE TABLE house
(
id serial NOT NULL PRIMARY KEY,
housename TEXT,            
picture TEXT,
colors TEXT,
points INTEGER
);

CREATE TABLE quidditch
(
id serial PRIMARY KEY,
houseid INTEGER references house(id),
studentid INTEGER references student(id),
position VARCHAR(20) 
)