update house
set points = (SELECT sum(studentpoints)
FROM student
WHERE houseid = '4')
where id = 4