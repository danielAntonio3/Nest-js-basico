import { Injectable } from '@nestjs/common';

//* INTERFACES
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  // ?SI MULACION DE BASE DE DATOS
  tasks: Task[] = [
    {
      id: 1,
      title: 'Test',
      description: 'Testing description',
      done: true,
    },
    {
      id: 2,
      title: 'Test2',
      description: 'Testing description 2',
      done: false,
    },
    {
      id: 3,
      title: 'Test3',
      description: 'Testing description 3',
      done: false,
    },
  ];
  // *METODOS DE ACCESO
  // ?SOLO REGRESA LAS TAREAS
  getTasks(): Task[] {
    return this.tasks;
  }
  // ?SOLO REGRESA UNA TAREA
  getTask(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
