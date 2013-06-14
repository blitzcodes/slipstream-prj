Meteor.publish('allProject', function() {
	return Project.col.find();
});