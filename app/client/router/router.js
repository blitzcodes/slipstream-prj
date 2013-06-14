Meteor.Router.add('/', {to : 'root', as : 'home'});

Meteor.Router.filters({
	'requireLogin' : function (page) {
		if (Meteor.user())
			return page;
		else if (Meteor.loggingIn())
			return 'userLoading';
		else
			return 'userSignIn';
	},
	'clearErrors'  : function (page) {
		clearErrors();
		return page;
	}
});

Meteor.Router.filter('clearErrors');
