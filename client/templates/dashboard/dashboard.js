
Template.dashboard.rendered = function() {

    if(Events.find({userId: Meteor.userId()}).count() === 0){
        Session.set("hideButtons", false);
    }else{
        Session.set("hideButtons", true);
        return Events.find({userId: Meteor.userId()});
    }
};

Template.dashboard.helpers({

    hidingButtons: function() { return Session.get('hideButtons'); },

	createdByUser: function(){
		if(Events.find({userId: Meteor.userId()}).count() === 0){
            Session.set("hideButtons", false);
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

