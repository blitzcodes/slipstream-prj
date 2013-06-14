Meteor.startup(function () {
	Project.allow({
		update : ownsDocument,
		remove : ownsDocument
	});

	Project.deny({
		update : function (userId, post, fieldNames) {
			// may only edit the following three columns:
			return (_.without(fieldNames, 'title', 'desc').length > 0);
		}
	});
});

