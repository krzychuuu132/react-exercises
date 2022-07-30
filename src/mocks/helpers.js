export const authenticateRequest = (req) => {
  const token = localStorage.getItem('__be_token') || null;
  const userToken = req.headers.get('Authorization')?.replace('Bearer ', '');

  return token === userToken;
};
