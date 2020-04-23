const fastify = require('fastify')({ logger: true });

const firstRoute = require('./routes/first');

fastify.get('/', async () => {
  return { hello: 'world' };
});

fastify.route({
  method: 'GET',
  url: '/hello',
  schema: {
    querystring: {
      name: { type: 'string' },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
        },
      },
    },
  },
  preHandler: async (request, reply) => {
    fastify.log.info('Before the handler!!');
  },
  handler: async (request, reply) => {
    return { hello: `hello ${request.query.name}` };
  },
});

fastify.register(firstRoute);

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Fastify running on port ${fastify.server.address().port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
