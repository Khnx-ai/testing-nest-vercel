import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello, World!';
  }

  @Post()
  createHello(@Body() data: any): string {
    return `Data received: ${JSON.stringify(data)}`;
  }

  @Put(':id')
  updateHello(@Param('id') id: string, @Body() data: any): string {
    return `Data with ID ${id} updated to: ${JSON.stringify(data)}`;
  }

  @Delete(':id')
  deleteHello(@Param('id') id: string): string {
    return `Data with ID ${id} deleted.`;
  }
}
