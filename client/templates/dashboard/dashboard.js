Template.dashboard.rendered = function() {

    if(Events.find({userId: Meteor.userId()}).count() === 0){

        //deleteBtn.remove();
        Session.set("hideButtons", false);
        //return [{eventName: "Oh noes!  You don't have any events yet, you should make one!"}];
    }else{
        Session.set("hideButtons", true);
        return Events.find({userId: Meteor.userId()});

    }
};

//Session.setDefault('hideButtons',true);

//Template.dashboard.hideButtons = function(){
//    return Session.get('hideButtons');
//};



Template.dashboard.helpers({

    hidingButtons: function() { return Session.get('hideButtons'); },

	createdByUser: function(){
       // var deleteBtn = $('.deleteEventBtn');
       // var editBtn = $('.editEventBtn');
        //var hideButtons = false;
		if(Events.find({userId: Meteor.userId()}).count() === 0){

			//deleteBtn.remove();
            Session.set("hideButtons", false);
			//return [{eventName: "Oh noes!  You don't have any events yet, you should make one!"}];
		}else{
            Session.set("hideButtons", true);
			return Events.find({userId: Meteor.userId()});

		}
	}
});



Template.dashboard.events({

	'click .eventLink': function(e){
		e.preventDefault();
		var thisId = this._id;
		Session.set('newEventId', thisId);
		Router.go('eventPage', {_id: thisId});
	},
	'click .editEventBtn': function(e){
		e.preventDefault();
		var thisId = this._id;
		Router.go('editEvent', {_id: thisId});
	},
	'click .deleteEventBtn': function(e){
		e.preventDefault();
		var thisId = this._id;
		var confirm = window.confirm("Are you sure you want to delete this event?");
		if(confirm === true){
			Events.remove({_id: thisId});
		}
	}
});

