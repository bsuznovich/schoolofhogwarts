CREATE TABLE student
(
id serial PRIMARY KEY,
firstname VARCHAR(150) NOT NULL,                        
lastname VARCHAR(150) NOT NULL,
year VARCHAR(1),
houseid INTEGER NOT NULL references house(id),
points VARCHAR(3) NOT NULL,
picture TEXT,
email VARCHAR(150) NOT NULL,
hash VARCHAR(150)
);

-- insert into student 
--     (firstname, lastname, year, points, houseid, picture, email)
-- values ('Harry', 'Potter', '5', '30', 1, 'https://vignette.wikia.nocookie.net/rifftrax/images/5/53/550w_movies_harry_potter_order_of_phoenix_1.jpg/revision/latest?cb=20140621181250', 'hpotter@hogwarts.student.edu'),
-- ('Hermione', 'Granger', '5', '45', 1, 'https://i.pinimg.com/originals/d3/e1/cf/d3e1cfaa6a1fe9ea9e5830f98a166b71.jpg', 'hgranger@hogwarts.student.edu'),
-- ('Ronald', 'Weasley', '5', '15', 1, 'http://images4.fanpop.com/image/photos/22600000/Ronald-harry-potter-22633771-294-294.png', 'rweasley@hogwarts.student.edu'),
-- ('Ginerva', 'Weasley', '4', '35', 1, 'http://images6.fanpop.com/image/photos/34100000/Ginny-Weasley-Wallpaper-ginevra-ginny-weasley-34182882-1280-800.jpg', 'ginnyw@hogwarts.student.edu'),
-- ('Fred', 'Weasley', '7', '-15', 1, 'https://vignette.wikia.nocookie.net/harrypotterfanon/images/9/9a/Fred_Weasley_II.jpg/revision/latest?cb=20160417155917', 'fweasley@hogwarts.student.edu'),
-- ('George', 'Weasley', '7', '-15', 1, 'https://vignette.wikia.nocookie.net/jadensadventures/images/4/4f/300full.jpg/revision/latest?cb=20141210064629', 'gweasley@hogwarts.student.edu'),
-- ('Neville', 'Longbottom', '5', '10', 1, 'https://i.pinimg.com/originals/6c/11/59/6c1159526ed421993d347826b9708a84.jpg', 'nlongbottom@hogwarts.student.edu'),
-- ('Seamus', 'Finnigan', '5', '15', 1, 'https://i.pinimg.com/originals/fb/c9/f4/fbc9f4f41cb7355f13373f43214397fa.jpg', 'sfinnigan@hogwarts.student.edu'),
-- ('Draco', 'Malfoy', '5', '25', 4, 'https://i.pinimg.com/originals/34/09/a1/3409a1b3d6a6cdd07d02b6a8594bf309.jpg', 'dmalfoy@hogwarts.student.edu'),
-- ('Vincent', 'Crabbe', '5', '10', 4, 'https://vignette.wikia.nocookie.net/harrypotter/images/b/ba/Vincent_Crabbe.jpg/revision/latest?cb=20091224183746', 'vcrabbe@hogwarts.student.edu'),
-- ('Gregory', 'Goyle', '5', '15', 4, 'https://vignette.wikia.nocookie.net/harrypotter/images/3/3d/Gregory_Goyle-DH2.jpg/revision/latest?cb=20180306163743', 'ggoyle@hogwarts.student.edu'),
-- ('Adrian', 'Pucey', '7', '20', 4, 'https://i.pinimg.com/originals/85/b6/92/85b692272445711bbe732856d2bbf42f.jpg', 'apucey@hogwarts.student.edu'),
-- ('Pansy', 'Parkinson', '5', '30', 4, 'http://coolspotters.com/files/photos/687984/pansy-parkinson-gallery.png', 'pparkinson@hogwarts.student.edu'),
-- ('Blaise', 'Zabini', '5', '5', 4, 'https://vignette.wikia.nocookie.net/harrypotter/images/5/59/Blaise_Zabini.png/revision/latest?cb=20170102051038', 'bzabini@hogwarts.student.edu'),
-- ('Hannah', 'Abbott', '5', '40', 2, 'https://vignette.wikia.nocookie.net/harrypotter/images/b/b7/Harry-potter-goblet-of-fire-hannah.jpg/revision/latest?cb=20170731215859', 'habbott@hogwarts.student.edu'),
-- ('Susan', 'Bones', '5', '35', 2, 'https://vignette.wikia.nocookie.net/harrypotter/images/7/77/Susan01.png/revision/latest?cb=20150107120752', 'sbones@hogwarts.student.edu'),
-- ('Cedric', 'Diggory (RIP)', '7', '40', 2, 'https://vignette.wikia.nocookie.net/harrypotter/images/2/23/CedricDiggoryProfile.png/revision/latest?cb=20161123045136', 'cdiggory@hogwarts.student.edu'),
-- ('Zacharias', 'Smith', '4', '25', 2, 'https://vignette.wikia.nocookie.net/harrypotter/images/0/0c/WB_F5_Dumbledores_army_smith.jpg/revision/latest?cb=20180215164827', 'zsmith@hogwarts.student.edu'),
-- ('Justin', 'Finch-Fletchley', '5', '20', 2, 'https://vignette.wikia.nocookie.net/harrypotter/images/7/78/Justin_Finch-Fletchley_%28McGonagall%27s_Class%29.png/revision/latest?cb=20121111075430', 'jfinch-fletchley@hogwarts.student.edu'),
-- ('Ernest', 'Macmillan', '5', '30', 2, 'https://vignette.wikia.nocookie.net/harrypotter/images/d/de/Ernie_GOF.jpg/revision/latest?cb=20160720043852', 'emacmillan@hogwarts.student.edu'),
-- ('Luna', 'Lovegood', '4', '35', 3, 'https://i.pinimg.com/736x/1a/be/01/1abe010e3fe69a67d156e8bea39344d2--luna-lovegood-costume-potter-school.jpg', 'llovegood@hogwarts.student.edu'),
-- ('Cho', 'Chang', '6', '40', 3, 'https://images.pottermore.com/bxd3o8b291gf/4PbTuJ9S2QoEwycW4gs4Mg/21f94bfe4081438a9bc3c159c2831b5a/ChoChang_WB_F5_ChoChangPointingWand_Promo_080615_Port.jpg?w=1200', 'cchang@hogwarts.student.edu'),
-- ('Marcus', 'Belby', '6', '10', 3, 'https://vignette.wikia.nocookie.net/harrypotter/images/d/d4/Robert_knox.jpg/revision/latest?cb=20140328073139', 'mbelby@hogwarts.student.edu'),
-- ('Padma', 'Patil', '5', '15', 3, 'https://vignette.wikia.nocookie.net/harrypotter/images/e/ef/Padma_patil.PNG/revision/latest?cb=20090723090430', 'ppatil@hogwarts.student.edu'),
-- ('Michael', 'Corner', '5', '10', 3, 'https://vignette.wikia.nocookie.net/harrypotter/images/f/f5/Michael_1995.jpg/revision/latest?cb=20160804031238', 'mcorner@hogwarts.student.edu'),
-- ('Roger', 'Davies', '7', '25', 3, 'https://m.media-amazon.com/images/M/MV5BMTIzYWVjZjEtYTRiZC00YWU2LWFiMGUtZmQ2YzgzMjgzZmY3XkEyXkFqcGdeQXVyNjczOTIyOTU@._V1_.jpg', 'rdavies@hogwarts.student.edu')

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