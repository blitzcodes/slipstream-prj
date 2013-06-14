
var temp = Template['userLogin'];
temp.events({
	'click #btnLogin' : function (e, t) {
		Meteor.loginWithPassword(t.find("#username").value,
			t.find("#password").value);
	}
});
