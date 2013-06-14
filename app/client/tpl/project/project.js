debug("/app/client/tpls/project/project.js");

var tpls = Project.templates,
	tplList = tpls.List,
	tplView = tpls.View,
	tplCreate = tpls.Create,
	tplUpdate = tpls.Update,
	tplDelete = tpls.Delete;

/***********************************************************************************************************************
 * List Template - rendering a list of the View Templates
 ******************************************************************************************************************** */
	// Testing out chaining, if successful, greatly reduces the amount of placeholder code required per file!
tplList.helpers({
	items : function () {
		return Project.find({}, {sort: {dateCreated:-1}});
	}
});
tplList.events({
});
tplList.created = function () {
};
tplList.rendered = function () {
};
tplList.destroyed = function () {
};

/***********************************************************************************************************************
 * View Template - rendering a single entry of the collection
 ******************************************************************************************************************** */
tplView.helpers({
	columns : Project.renderColumnsBySession,
	values  : Project.renderValuesBySession
});
tplView.events({
});
tplView.created = function () {
};
tplView.rendered = function () {
};
tplView.destroyed = function () {
};

/***********************************************************************************************************************
 * Create Template - the input form used when first creating an entry
 ******************************************************************************************************************** */
tplCreate.helpers({
	inputs : Project.renderInputsBySession
});
tplCreate.events({
	'submit form' : Project.submitForm
});
tplCreate.created = function () {
};
tplCreate.rendered = function () {
};
tplCreate.destroyed = function () {
};

/***********************************************************************************************************************
 * Update Template - the input form used when updating an entry
 ******************************************************************************************************************** */
tplUpdate.helpers({
	inputs : Project.renderColumnsBySession
});
tplUpdate.events({
	'submit form' : Project.submitForm
});
tplUpdate.created = function () {
};
tplUpdate.rendered = function () {
};
tplUpdate.destroyed = function () {
};

/***********************************************************************************************************************
 * Delete Template - the form used when trying to delete an entry
 ******************************************************************************************************************** */
tplDelete.helpers({
	inputs : Project.renderColumnsBySession
});
tplDelete.events({
	'submit form' : Project.submitForm
});
tplDelete.created = function () {
};
tplDelete.rendered = function () {
};
tplDelete.destroyed = function () {
};
