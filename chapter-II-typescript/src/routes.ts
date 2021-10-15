import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: 'NodeJS',
        educator: 'Dani',
        duration: 11
    });

    CreateCourseService.execute({
        name: 'React',
        educator: 'Dieego'
    });

    return response.send();
}