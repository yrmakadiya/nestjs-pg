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

    @IsString()
    @IsNotEmpty({message: 'Password is required field'})
    @Column()
    password: string
}
