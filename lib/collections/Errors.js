// Local (client-only) collection

Errors = new Meteor.Collection(null);

displayError = function (message) {
	return Errors.insert({message : message, seen : false});
};

clearErrors = function () {
	return Errors.remove({seen : true});
};
