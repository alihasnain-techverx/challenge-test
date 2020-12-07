'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Challenge', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      challenge_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      challenge_question: {
        allowNull: false,
        type: Sequelize.STRING
      },
      challenge_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      challenge_expire: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      media_id: {
        type: Sequelize.INTEGER,
        allowNull:false
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
    await queryInterface.dropTable('Challenge');
  }
};