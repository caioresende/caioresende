var keystone = require('keystone');
keystone.init({
  
  'name': 'My Project',
  
  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],
  
  'views': 'templates/views',
  'view engine': 'jade',
  
  'auto update': true,
  'mongo': process.env.MONGO_URI || 'mongodb://localhost/your-db',
  
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': '(your secret here)'
  
});
 
require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start();