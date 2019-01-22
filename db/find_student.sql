-- SELECT * FROM student
-- WHERE email = ${email}

select * from student
join house on house.id = student.houseid
where email = ${email}