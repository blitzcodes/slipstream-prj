// JS code for the client (browser)

// Session var to keep current filter type ("all", "active", "completed")
Session.set('filter', 'all');

// Get selector types as array
var filters = _.keys(filter_selections);

// Bind route handlers to filter types
var routes = {};
_.each(filters, function (filter) {
	routes['/' + filter] = function () {
		Session.set('filter', filter);
	};
});

// Initialize router with routes
var router = Router(routes);
router.init();
