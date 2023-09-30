import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @IsOptional()
    @IsInt()
    id: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty({message: 'Name is required field'})
    @Column()
    name: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty({message: 'Email is required field'})
    @Column()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({message: 'Password is required field'})
    @Column()
    password: string
}
