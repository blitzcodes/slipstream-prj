/*------------------------- 
Flie: clientInit.js
Created: 2013-02-27 9:08PM EST
Author: Sean 'Blitz' Homer

Application Initalization: 
Client code that runs kicking off before the full client folder assets pickup, 
given the odd declaritive behavour of Meteor 
-------------------------*/

//debug("lib/main.js");

if (Meteor.isClient) {
//  Collection subscritions
//	Meteor.subscribe("collection");

//	Start up the application
	Meteor.startup(function () {
		Meteor.autorun(function () {
            /*
            Check get/set any inital Session varibles that may be required,
            and any inittal processing or template activies on first load.
            */

//			if (!Session.get("selected")) {
//				Session.set("selected", "id");
//			}
		});
	});
}
