var keystone = require('keystone'),
    Categories = keystone.list('PostCategory');
 
exports = module.exports = function(done) {
    
    new Categories.model({
        name: "Photography",
        language: "en-us"
    }).save(done);
};