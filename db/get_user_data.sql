-- SELECT * FROM student
-- WHERE id = ${id}

select * from student
join house on house.id = student.houseid
where student.id = ${id}