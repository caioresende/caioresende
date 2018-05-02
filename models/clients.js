var keystone = require('keystone');
var Types = keystone.Field.Types;

var PostClient = new keystone.List('PostClient', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Clients',
});

PostClient.add({
    name: { type: String, required: true },
    location: { type: String },
    url: { type: String },
    feedback: { type: String }
});

PostClient.relationship({ ref: 'Post', refPath: 'client' });

PostClient.track = true;
PostClient.register();