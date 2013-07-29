// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Slipstream.defaults({
	options   : {
		requireUserId        : false,
		useDefaultDateFields : false,
		routesPluralized     : false,
		scaffolding          : false
	},
	debugging : {
		enabled : true,
		session: false
	}
});

Player = new Slipstream.Drift({
	name      : 'player',
	columns   : {
		name  : {
		},
		score : {
			updateMethod : '$inc'
		}
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
				'click input.inc' : function (e, t) {
					//					Player.update({_id : Player.sessionId()}, {$inc : {score : 5}});
					Player.templates.list.submitFormWithData(e, {
						_id   : Player.sessionId(),
						score : 5
					});
				}
			}
		},
		view : {
			helpers : {
				selected : function () {
					return Player.sessionEquals(this._id) ? "selected" : '';
				}
			},
			events  : {
				'click' : function () {
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
