import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @IsOptional()
    @IsInt()
    id: number

    @IsString()
    @IsNotEmpty({message: 'Name is required field'})
    @Column()
    name: string

    @IsInt()
    @IsNotEmpty({message: 'Age is required field'})
    @Column()
    age: number
}
