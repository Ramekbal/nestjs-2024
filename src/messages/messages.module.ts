import { Module } from '@nestjs/common';
import { MassagesController } from './massages.controller';

@Module({
  controllers: [MassagesController]
})
export class MessagesModule {}
