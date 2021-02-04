import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //!LAS RUTAS DEL SERVIDOR
  //?NOS PERMITE MANEJAR LAS PETICIONES QUE VIENEN DEL LADO CLIENTE
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
