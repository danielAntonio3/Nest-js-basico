import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Req,
  Res,
} from '@nestjs/common';
// *IMPORTAMOS EL DTO
import { CreateTaskDto } from './dto/create-task.dto';
// *IMPORTANDO EXPRESS (no es necesario instalas ya esta incluido)
import { Request, Response } from 'express';
// *IMPORTANDO LOS SERVICE
import { TasksService } from './tasks.service';
// *IMPORTANDO LA INTEFCAES
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {
  // !INSTANCIAR EL SERVICE
  constructor(private TasksService: TasksService) {}
  @Get('service')
  getTaskUse(): Task[] {
    return this.TasksService.getTasks();
  }
  @Get('taskId/:id')
  getTaskUseId(@Param('id') id: string): Task {
    return this.TasksService.getTask(parseInt(id));
  }
  // ?------ SYNTAX DE NEST------------------------------------------

  // *GET
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
  @Get('json')
  getTasksJson(): { variant: string } {
    return {
      variant: 'Hello',
    };
  }
  // *----------------------------------------------------------------
  // *POST
  /*
  @Post()
  createTask(): string {
    return 'Creating a task';
  }*/
  // !LA FOMRMA DE LEER LOS DATOS DE UNA PETICION DE TIPO POST
  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);
    return 'Creating a task';
  }
  // !COMO UTILIZAR LOS METODOS CON PARAMETROS
  @Post('post/:id')
  createTaskPost(@Param('id') id): string {
    console.log(id);
    return `Creating a task number ${id}`;
  }
  // *----------------------------------------------------------------
  // *PUT
  @Put()
  updateTask(): string {
    return 'Updating a task';
  }
  // !COMO UTILIZAR LOS METODOS CON PARAMETROS
  @Put('update/:id')
  updateTaskPut(@Param('id') id): string {
    console.log(id);
    return `Update a task number ${id}`;
  }
  // !UTILIZANDO PARAMETROS Y DATOS
  @Put('updateBody/:id')
  updateTaskBody(@Body() task: CreateTaskDto, @Param('id') id: number): string {
    console.log(id);
    console.log(task);
    return `Update a task number ${id} and 
          Title: ${task.title} 
          Description: ${task.description} 
          Done: ${task.done}`;
  }
  // *----------------------------------------------------------------
  // *DELETE
  @Delete()
  deleteTask(): string {
    return 'Deleting a task';
  }
  // !COMO UTILIZAR LOS METODOS CON PARAMETROS
  @Delete('parameters/:id')
  deleteTaskParameters(@Param('id') id): string {
    console.log(id);
    return `Deleting a task number: ${id}`;
  }
  // *----------------------------------------------------------------
  // ?================================================================
  // ?------ SYNTAX OF EXPRESS----------------------------------------
  @Get('express')
  getTasksExpress(@Req() req, @Res() res): Response {
    return res.send('Desde Express');
  }
  // ?---------------------------------------------------------------
}
