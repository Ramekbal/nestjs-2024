import { Injectable } from '@nestjs/common';

export interface Student {
  name: string;
  id: number;
  age: number;
}
@Injectable()
export class StudentService {
  private store = new Map<number, Student>();
  addStudent(student: Student) {
    this.store.set(student.id, student);
  }
  getStudent(id: number) {
    return this.store.get(id);
  }

  getStudents() {
    return Array.from(this.store.values());
  }

  deleteStudent(id: number) {
    this.store.delete(id);
  }

  updateStudent(id: number, student: Student) {
    this.store.set(id, student);
  }
}
