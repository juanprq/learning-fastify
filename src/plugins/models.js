const fastifyPlugin = require('fastify-plugin');
const models = require('../models');

const modelsPlugin = async (fastify) => {
  fastify.decorate('models', models);
};

module.exports = fastifyPlugin(modelsPlugin);
