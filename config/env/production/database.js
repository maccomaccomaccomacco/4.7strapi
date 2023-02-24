const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      database: 'strapi-test',
      user: 'strapi',
      password: 'strapi',
      port: 5432,
      host: '164.90.236.172',
    },
  },
});
