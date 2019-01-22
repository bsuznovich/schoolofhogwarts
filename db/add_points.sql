update house
set points = (SELECT sum(studentpoints)
FROM student
WHERE houseid = ${houseid})
where id = ${houseid};
select points from house
where id = ${houseid}