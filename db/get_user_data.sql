-- SELECT * FROM student
-- WHERE id = ${id}

select student.*, house.housename from student
left join house on house.id = student.houseid
where student.id = ${id}


inner hoin qj On qj.set_id = qs.set_id