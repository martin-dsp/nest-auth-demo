import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService], // 다른 모듈에서 이 모듈을 쓰기 위해서는 exports를 해줘야 함. 그리고 해당 모듈에서 imports
})
export class UsersModule {}
