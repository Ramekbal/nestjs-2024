import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MassagesController {
    @Get()
    listMessage() {
        return "All list return";
    }

    @Post()
    createMessage() {
        
    }

    @Get('/:id')
    getMessage() {
        // return one massage
    }
}
