const express = require('express');
const app = express();

app.get("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post('courses', (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", 'Curso 4']);
});

app.listen(3333, () => {
    console.log('BACKEND EXECUTING IN 3333');
});
