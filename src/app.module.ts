import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { typeOrmConfigForPG } from './utils/db';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [
    UserModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfigForPG, // Use the imported configuration function
      inject: [ConfigService],
    }),
    AuthModule],
})
export class AppModule {}
