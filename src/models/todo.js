module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {});
  Todo.associate = function() {
    // associations can be defined here
  };
  return Todo;
};
