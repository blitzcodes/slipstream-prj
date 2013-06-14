var temp = Template['menuBar'];
temp.helpers({
});
temp.events({
});
temp.created = function () {
};
temp.rendered = function () {
	$(window).resize();
	debug("Windows Refresh");
};
temp.destroyed = function () {
};