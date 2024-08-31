import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { console } from 'inspector';

@Controller('messages')
export class MassagesController {
    @Get()
    listMessage() {
        return "All list return";
    }

    @Post()
    createMessage(@Body() body:any) {
        console.log(body);
        
    }

    @Get('/:id')
    getMessage(@Param('id') id:string) {
        console.log(id);
        // return one massage
    }
}
