import { Controller, All, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './auth';

@Controller('api/auth')
export class AuthController {
  @All('*path')
  handler(@Req() req: Request, @Res() res: Response) {
    return toNodeHandler(auth)(req, res);
  }
}