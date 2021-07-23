export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongodb_url: process.env.MONGODB_URL,
});
