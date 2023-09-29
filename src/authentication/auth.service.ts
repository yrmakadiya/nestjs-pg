
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private usersService: UserService) {}

  async signIn(username: string, userpassword: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    const match = await bcrypt.compare(userpassword, user.password);
    if (!match) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    const token = await this.getToken(result);

    return {
      access_token: token
    };
  }

  async getToken(result): Promise<string>{
    return this.jwtService.sign(result)
  }

}