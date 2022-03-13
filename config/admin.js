module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8ccb494f37e01806cc9d3bd6644f4d6e'),
  },
});
