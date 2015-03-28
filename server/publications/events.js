Meteor.publish('events', function(){
	return Events.find({userId: this.userId});
});

Meteor.publish('findById', function(){
	return Events.find({_id: this._id});
});

Meteor.publish('usersDates', function(){
	return Events.find({
		userId: this.userId //,
		//todo: add selector for events user is invited to 
		//as well as the events made by user
	});
});