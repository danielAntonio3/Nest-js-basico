import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  // !EL @Get ES UN DECORADOR
  @Get()
  getTask(): string {
    return 'Desde tareas';
  }
  /*
  !SI DESEAS CAMBIAR LA RUTA SOLO AGREGA LA RUTA
  !ENTRE COMILLAS SIMPRES DENTRO DEL @Get('nombre _ruta')
  ?LA NUEVA RUTA SERIA http://localhost:3000/tasks/nombre_ruta
  */
  @Get('test')
  getTasks(): string {
    return 'Desde tareas/test';
  }
  /*
  @Post()
  createTask(): string {
    return 'Creating a task';
  }*/
  // !LA FOMRMA DE LEER LOS DATOS DE UNA PETICION DE TIPO POST
  @Post()
  createTask(@Body() task): string {
    console.log(task);
    return 'Creating a task';
  }
  @Put()
  updateTask(): string {
    return 'Updating a task';
  }
  @Delete()
  deleteTask(): string {
    return 'Deleting a task';
  }
}
