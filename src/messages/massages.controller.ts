import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MassagesController {
    @Get()
    listMessage() {
        return "All list return";
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log(body);
        
    }

    @Get('/:id')
    getMessage(@Param('id') id:string) {
        console.log(id);
        // return one massage
    }
}
