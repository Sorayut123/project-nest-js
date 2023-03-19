import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
  ){}
    //สร้าง Data
  create(createTodoDto: CreateTodoDto) {
    return this.todoRepository.save(createTodoDto);
  }

  findAll() {
    return this.todoRepository.find();
  }
//หาด้วย id
  findOne(id: number) {
    return this.todoRepository.findBy({
      id:id
    });
  }
//อัพเดตข้อมูล ใช้ id หา
  update(id: number, updateTodoDto: any) {
    return this.todoRepository.save({
      id:id,
      title:updateTodoDto.title,
      user_name:updateTodoDto.user_name,
      status:updateTodoDto.status,
    });
  }
// ใช้ลบด้วยการใช้ id
  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
