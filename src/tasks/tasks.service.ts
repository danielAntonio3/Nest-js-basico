import { Injectable } from '@nestjs/common';
//* INTERFACES
import { Task } from './interfaces/Task';
@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Test',
      description: 'Testing description',
      done: true,
    },
  ];
}
