import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';

let USER = [];
@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO) {
    const checkUser = USER.find((user) => user.id == createUserDTO.id);
    if (checkUser) {
      return `User Already Exists ${createUserDTO.id}`;
    } else {
      USER.push(createUserDTO);
      return `User Added ${createUserDTO.id}`;
    }
  }

  @Get()
  getAllUsers() {
    if (USER.length > 0) {
      return USER;
    } else {
      return `No users found`;
    }
  }
  @Get(':id')
  getUser(@Param('id') id: number) {
    return USER[id];
  }
  @Put(':id')
  updateUser(@Param('id') id: number, @Body() createUserDTO: CreateUserDTO) {
    const checkUser = USER.find((user) => user.id == id);
    if (checkUser) {
      USER[id] = createUserDTO;
      return `User Updated ${id}`;
    } else {
      return `No user found ${id}`;
    }
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    const checkUser = USER.find((user) => user.id == id);
    if (checkUser) {
      USER = USER.splice(id, 1);
      return `User Deleted ${id}`;
    }
    return `No user found ${id}`;
  }
}
