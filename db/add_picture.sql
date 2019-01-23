update student
set studentpicture = ${studentpicture}
where email = ${email}
returning *