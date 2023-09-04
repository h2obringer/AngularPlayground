import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
    courseListData = [
        { id: 1, name: 'test' },
        { id: 2, name: 'test2' },
    ]

    getAllCourses(): any {
        const courseList = new Promise<{ id: number, name: string }[]>((resolve, reject) => {
            setTimeout(() => {
                resolve(this.courseListData);
            }, 5000);
        });
        return courseList;
    }
}