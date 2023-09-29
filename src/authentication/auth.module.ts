import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtModule, JwtModuleOptions, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { jwtOptions } from 'src/utils/jwt';

@Module({
  imports: [
   JwtModule.register(jwtOptions as unknown as JwtModuleOptions),
   TypeOrmModule.forFeature([User])
 ],
  controllers: [AuthController],
  providers: [ UserService, AuthService, JwtService],
  exports:[AuthService]
})
export class AuthModule {}
