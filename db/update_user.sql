update student
set firstname = ${firstname}, lastname = ${lastname}, year = ${year}, studentpoints = ${studentpoints}
where id = ${id}
returning firstname, lastname, id, houseid, studentpoints, year