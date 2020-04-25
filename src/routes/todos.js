module.exports = async (fastify, options) => {
  const { models } = fastify;

  fastify.get('/', async (request, reply) => {
    const todos = await models.Todo.findAll();

    return todos;
  });

  const postOptions = {
    schema: {
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          done: { type: 'boolean' },
        },
      },
    },
  };
  fastify.post('/', postOptions, async (request, reply) => {
    const todo = await models.Todo.create(request.body);
    return todo;
  });
};
