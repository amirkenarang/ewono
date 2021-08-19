import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const RequestUsername = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const username = request.user.username;

    return username;
  },
);
