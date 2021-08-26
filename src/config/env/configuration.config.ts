export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongodb_url: process.env.MONGODB_URL,
  jwtExpiration: process.env.JWT_EXPIRES_IN,
  hashSalt: process.env.HASH_SALT,
});
