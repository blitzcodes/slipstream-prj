// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Slipstream.defaults({
	options : {
		requireUserId        : false,
		useDefaultDateFields : false,
		routesPluralized     : false,
		scaffolding          : false
	}
});

Player = new Slipstream.Drift({
	name      : 'player',
	//	sessionReference : 'selected_player',
	columns   : {
		name  : {
		},
		score : {
			updateMethod : '$inc'
		}
	},
	debugging : {
		enabled : true
	},
	templates : {
		list : {
			helpers : {
				players       : function () {
					return Player.find({}, {sort : {score : -1, name : 1}});
				},
				selected_name : function () {
					var player = Player.loadBySession();
					return player && player.name;
				}
			},
			events  : {
				'click input.inc' : function () {
					Player.update({_id : Player.sessionId()}, {$inc : {score : 5}});
				}
			}
		},
		view : {
			helpers : {
				selected : function () {
					/*
					 This should be a viable reactive way of handling this
					 */
					//return Player.sessionId() === this._id ? "selected" : '';

					/*
					 A cleaner method however to replicate how the original example functions, this will function wraps
					 the sessionId in as Session.equals call back, returning the results here.
					 */
					return Player.sessionEquals(this._id) ? "selected" : '';
				}
			},
			events  : {
				'click' : function () {
					/*
					 To update the current session reference, all that is required is passing a new value into the
					 .sessionId(id) function. As always, protection on what can be accessed by the session must reside
					 in the allow/deny controls on the resulting methods when building a application, as the session is
					 unsecured.
					 */
					Player.sessionId(this._id);
				}
			}
		}
	}
});

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Player.find().count() === 0) {
			var names =
				[
					"Ada Lovelace",
					"Grace Hopper",
					"Marie Curie",
					"Carl Friedrich Gauss",
					"Nikola Tesla",
					"Claude Shannon"
				];
			for (var i = 0; i < names.length; i++)
				Player.insert({name : names[i], score : Math.floor(Random.fraction() * 10) * 5});
		}
	});
}
