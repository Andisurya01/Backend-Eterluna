const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eterluna_pictureaid', 'eterluna_pictureaid', 'de9917216016fcaf50f6e862a18e0e5c0f57341e', {
  host: 'b3s8f.h.filess.io',
  port: 3305,
  dialect: 'mysql',
  dialectModule: require('mysql2')
});

sequelize.authenticate()
  .then(() => console.log('✅ Connection established.'))
  .catch(err => console.error('❌ Unable to connect:', err));