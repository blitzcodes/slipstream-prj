var tplList = Template["errorsList"];

tplList.helpers({
	errors : function () {
		return Slipstream.Errors.find();
	}
});
tplList.rendered = function () {
	var error = this.data;
	Meteor.defer(function () {
		Slipstream.Errors.update(error._id, {$set : {seen : true}});
	});
};