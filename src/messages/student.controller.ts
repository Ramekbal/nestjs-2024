import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { StudentDTO } from './dtos/student.dto';
import { StudentService } from './student.service';

let USER = [];
@Controller('/students')
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Post()
  addStudent(@Body() studentDTO: StudentDTO) {
    this.studentService.addStudent(studentDTO);
    return { message: 'Student added' };
  }

  @Get()
  getStudents() {
    return this.studentService.getStudents();
  }

  @Get(':id')
  getStudent(@Param('id') id: number) {
    return this.studentService.getStudent(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() studentDTO: StudentDTO) {
    this.studentService.updateStudent(id, studentDTO);
    return { message: 'Student Updated' };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.studentService.deleteStudent(id);
    return { message: 'Student Deleted' };
  }
}
