import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'; // Replace with the actual path

export const typeOrmConfigForPG = async (): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User],
  synchronize: process.env.DB_SYNC,
});
