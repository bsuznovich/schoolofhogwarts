-- SELECT * FROM student
-- WHERE email = ${email}

select student.*, house.housename from student
join house on house.id = student.houseid
where email = ${email}