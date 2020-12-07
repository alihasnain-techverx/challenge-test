'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reward', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trick_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      challenge_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      win: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reward');
  }
};