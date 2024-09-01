import { Module } from '@nestjs/common';
import { MassagesController } from './massages.controller';
import { UserController } from './user.controller';

@Module({
  controllers: [MassagesController, UserController],
})
export class MessagesModule {}
