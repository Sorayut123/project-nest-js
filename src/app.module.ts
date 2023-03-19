import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',//เปลี่ยน เป็น sql
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '', // ว่าง
            database: 'test',
            entities: [Todo], // class Todo
            synchronize: true,
        }),
        TodoModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) { }
}
