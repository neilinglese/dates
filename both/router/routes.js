Router.route('/', {
  name: 'dashboard'
});

Router.route('/loginPage', {
  name: 'loginPage'
});

Router.route('/profile');
Router.route('/friends');

Router.route('/makeEvent',{
	name: 'makeEvent'
});

Router.route('/eventPage/:_id', {
	name: 'eventPage',
	data: function(){return Events.findOne(this.params._id);}
});

Router.route('/editEvent/:_id', {
	name: 'editEvent',
	data: function(){return Events.findOne(this.params._id);}
});
