import { Module } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

// *IMPORTANDO MONGOOSE
import { MongooseModule } from '@nestjs/mongoose';

// *IMPORTAR EL SCHEMA
import { TaskSchema } from './schemas/task.schema';

@Module({
  // !DE ESTA FORMA IMPORTAMOS EL SCHEMA CON UN NOMBRE, Y EL NOMBRE DEL SCHEMA
  imports: [MongooseModule.forFeature([{ name: 'task', schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
