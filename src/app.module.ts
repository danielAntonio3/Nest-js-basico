import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
// !IMPORTAMOS MONGODB
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(
      'mongodb+srv://danny:12345678a@cluster0.medst.mongodb.net/dbnest?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
