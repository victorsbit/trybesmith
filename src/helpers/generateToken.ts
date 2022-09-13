import { sign, SignOptions } from 'jsonwebtoken';

export default function generateToken(username: string, password: string) {
  const secret = 'password';
  const jwtConfig: SignOptions = { algorithm: 'HS256', expiresIn: '1d' };

  return sign({ username, password }, secret, jwtConfig);
}
