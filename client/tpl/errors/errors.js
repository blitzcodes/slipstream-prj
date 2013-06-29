var tplList = Template["errorsList"];

tplList.helpers({
	errors : function () {
		return Slipstream.Error.find();
	}
});
tplList.rendered = function () {
	var error = this.data;
	Meteor.defer(function () {
		Slipstream.Error.update(error._id, {$set : {seen : true}});
	});
};