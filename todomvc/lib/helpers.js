// Set up filter types and their mongo db selectors
filter_selections = {
	all       : {},
	active    : {completed : false},
	completed : {completed : true}
};

// Returns an event_map key for attaching "ok/cancel" events to
// a text input (given by selector)

okcancel_events = function (selector) {
	return 'keyup ' + selector + ', keydown ' + selector + ', focusout ' + selector;
};

make_okcancel_handler = function (options) {
	var ok = options.ok || function () {};
	var cancel = options.cancel || function () {};

	return function (evt) {
		if (evt.type === 'keydown' && evt.which === 27) {
			// escape = cancel
			cancel.call(this, evt);

		}
		else if (evt.type === 'keyup' && evt.which === 13 ||
			evt.type === 'focusout') {
			// blur/return/enter = ok/submit if non-empty
			var value = String(evt.target.value || '');
			if (value) {
				ok.call(this, value, evt);
			}
			else {
				cancel.call(this, evt);
			}
		}
	};
};
