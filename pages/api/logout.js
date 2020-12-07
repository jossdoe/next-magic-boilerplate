import { magic } from 'auth/magic';
import { removeTokenCookie } from 'auth/auth-cookies';
import { getSession } from 'auth/iron';

export default async function logout(req, res) {
  const session = await getSession(req);
  await magic.users.logoutByIssuer(session.issuer);
  removeTokenCookie(res);
  res.writeHead(302, { Location: '/' });
  res.end();
}
