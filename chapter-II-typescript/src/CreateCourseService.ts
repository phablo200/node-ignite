interface Course {
    name: string;
    duration?: number;
    educator: string;
};

class CreateCourseClass {
    execute({ name, duration = 8, educator }: Course) {
        console.log('name: ', name);
        console.log('duration: ', duration);
        console.log('educator: ', educator);
    }
};

export default new CreateCourseClass();