import { Module } from '@nestjs/common';
import { MassagesController } from './massages.controller';
import { UserController } from './user.controller';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  controllers: [MassagesController, UserController, StudentController],
  providers: [StudentService],
})
export class MessagesModule {}
