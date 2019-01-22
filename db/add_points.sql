update house
set points = (SELECT sum(studentpoints)
FROM student
WHERE houseid = ${houseid})
where id = ${id}
returning *