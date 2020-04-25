const firstRoute = async (fastify, options) => {
  fastify.get('/first', async (requset, reply) => {
    return { first: 'route' };
  });
};

module.exports = firstRoute;
