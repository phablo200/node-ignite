import express from 'express';
import { createCourse } from './routes';

const app = express();

app.get('/', createCourse);

app.listen(3334, () => {
    console.log('BACKEND running on port 3334');
});