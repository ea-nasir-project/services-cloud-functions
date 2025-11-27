export default function handler(req, res) {
  const redirect = encodeURIComponent('https://e-renova.vercel.app/api/google/token');

  const url =
    `https://accounts.google.com/o/oauth2/v2/auth` +
    `?client_id=${process.env.GOOGLE_CLIENT_ID}` +
    `&redirect_uri=${redirect}` +
    `&response_type=code` +
    `&scope=https://www.googleapis.com/auth/business.manage` +
    `&access_type=offline` +
    `&prompt=consent`;

  return res.redirect(url);
}