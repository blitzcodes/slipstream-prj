debug("collections/Project");

Project = new Slipstream.Drift('project', 'slug', {
	_id    : new Slipstream.Column({
		name        : '',
		label       : 'Id',
		type        : InputTypes.hidden,
		placeholder : '',
		default     : ''
	}),
	title  : new Slipstream.Column({
		name        : 'title',
		label       : 'Project Title',
		type        : InputTypes.text,
		placeholder : 'Title',
		default     : ''
	}),
	desc   : new Slipstream.Column({
		name        : 'desc',
		label       : 'Project Description',
		type        : InputTypes.textarea,
		placeholder : 'Description',
		default     : ''
	}),
	author : new Slipstream.Column({
		name        : 'author',
		label       : 'Author',
		type        : InputTypes.hidden,
		placeholder : 'Author',
		default     : ''
	})
});

Meteor.methods({
	project : function (data) {
		if (Project.userHasAuth()) {
			var userId = data.userId || this.userId;

			data = _.extend(_.pick(data, Project.columnNames()), {
				userId : userId,
				title  : cleanUp(data.title),
				slug   : slugify(data.title),
				desc   : cleanUp(data.desc),
				author : data.author || getUsersDisplayName()
			});

			if (!data.title || !data.desc)
				return displayError("Please enter a title and description.");

			//			displayError("Data is " + JSON.stringify(data));
			//			displayError("User is " + JSON.stringify(Meteor.user()));

			data.insertId = Project.post(data);
		}

		return data;
	}
});
