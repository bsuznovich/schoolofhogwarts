INSERT INTO student
(
    firstname, lastname, year, studentpoints, email, hash
)
VALUES
(
    ${firstname}, ${lastname}, '1', '0', ${email}, ${hash}
)
RETURNING *;