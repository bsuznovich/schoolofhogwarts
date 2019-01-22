-- SELECT * FROM student
-- WHERE id = ${id}

select student.*, house.housename from student
join house on house.id = student.houseid
where student.id = ${id}