import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {Task} from "./task.model";
import {CreateTaskDto} from "./dto/create-task.dto";

@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService){}

        @Get()
        getAllTask():Task[] {
              return this.tasksService.getAllTasks();
            }

       @Get('/:id')
       getTaskById(@Param('id') id :string){
        return this.tasksService.getTaskById(id);
       }
       @Post()
        createTask(@Body() createTaskDto: CreateTaskDto):Task{
        return this.tasksService.createTask(createTaskDto);
        }

        @Delete('/:id')
    deleteTask(@Param('id') id:string):void{
           this.tasksService.deleteTask(id);
        }

}
