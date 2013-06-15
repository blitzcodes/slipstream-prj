Meteor.Router.add('/', {to : 'root', as : 'home'});

Meteor.Router.filters({
	'clearErrors' : function (page) {
		clearErrors();
		return page;
	}
});

Meteor.Router.filter('clearErrors');
