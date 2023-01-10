import passport, { use } from "passport";

import passportJWT, { Strategy } from "passport-jwt";

import { UserDbModel } from "../database";

var JwtStrategy = passportJWT.Strategy;
var ExtractJwt = passportJWT.ExtractJwt;

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secrect'
},
  function (jwtPayload: any) {
    return UserDbModel.findOne(jwtPayload.id)
  }))