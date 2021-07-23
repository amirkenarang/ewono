export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongodb_url: process.env.MONGODB_URL,
  jwtExpiration: process.env.JWT_EXPIRATION,
  hashSalt: process.env.HASH_SALT,
});
