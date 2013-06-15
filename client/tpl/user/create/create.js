
var temp = Template['userCreate'];
temp.events({
	'click #btnCreate' : function (e, t) {
		Session.set('creatingAccount', false);
		Accounts.createUser({
			username : t.find("#username").value,
			password : t.find("#password").value,
			email    : t.find("#email").value,
			profile  : {
				name : t.find("#name").value
			}
		});
	}
});
