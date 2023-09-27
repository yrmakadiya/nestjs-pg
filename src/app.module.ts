import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { typeOrmConfigForPG } from './utils/db';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfigForPG, // Use the imported configuration function
      inject: [ConfigService],
    }),
    UserModule],
})
export class AppModule {}
