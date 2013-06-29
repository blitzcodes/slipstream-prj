//debug("collections/Project");

Project = Slipstream.Drift(
	{
		name           : 'project',
		referenceField : 'slug',
		columns        : {
			title  : Slipstream.Column({
				name        : 'title',
				label       : 'Project Title',
				type        : InputTypes.text,
				placeholder : 'Title',
				default     : ''
			}),
			desc   : Slipstream.Column({
				name        : 'desc',
				label       : 'Project Description',
				type        : InputTypes.textarea,
				placeholder : 'Description',
				default     : ''
			}),
			author : Slipstream.Column({
				name        : 'author',
				label       : 'Author',
				type        : InputTypes.hidden,
				placeholder : 'Author',
				default     : ''
			})
		}
	}
);

Meteor.methods({
	project : function (data) {
		if (Project.userHasAuth()) {
			var userId = data.userId || this.userId;

			data = _.extend(_.pick(data, Project.columnNames()), {
				userId : userId,
				title  : _.escapeHTML(data.title),
				slug   : _.slugify(data.title),
				desc   : _.escapeHTML(data.desc),
				author : data.author || getUsersDisplayName()
			});

			if (!data.title || !data.desc)
				return Slipstream.Error.log("Please enter a title and description.");

			//			displayError("Data is " + JSON.stringify(data));
			//			displayError("User is " + JSON.stringify(Meteor.user()));

			data.insertId = Project.post(data);
		}

		return data;
	}
});
