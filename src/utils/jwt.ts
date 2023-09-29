import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtOptions = async (): Promise<JwtModuleOptions> => {
   return {
        global: true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: process.env.JWT_EXPIRESIN}
   }
  };
