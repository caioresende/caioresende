var keystone = require('keystone');
var Types = keystone.Field.Types;

var PostTag = new keystone.List('PostTag', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Tags',
});

PostTag.add({
	name: { type: String, required: true }
});

PostTag.relationship({ ref: 'Post', refPath: 'tags' });

PostTag.track = true;
PostTag.register();