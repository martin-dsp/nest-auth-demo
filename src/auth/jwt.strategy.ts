import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // validation은 이미 constructor에서 일어났기 때문에 하위에 validate에서 굳이 처리를 안 함.
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET', // protect this, move to env var later on..
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      name: payload.name,
    };
  }
}
