/*-------------------------
 Flie: hello.js
 Created: 2013-02-27 9:14PM EST
 Author: Sean 'Blitz' Homer

 View conroller
 -------------------------*/

var temp = Template['userMenu'];
temp.helpers({
	"creatingAccount" : function () {
		return Session.get('creatingAccount');
	}
});

temp.events({
	'click .showLogin'         : function (e, t) {
		Session.set('creatingAccount', false);
	},
	'click .showCreateAccount' : function (e, t) {
		Session.set('creatingAccount', true);
	},
	'click #logout'            : function (e, t) {
		Meteor.logout();
	}
});
