module.exports = async (fastify, options) => {
  const { models } = fastify;

  fastify.get('/', async (request, reply) => {
    const todos = await models.Todo.findAll();

    return todos;
  });
};
