module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createDatabase("MovieDb")
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropDatabase("MovieDb")
  }
};
