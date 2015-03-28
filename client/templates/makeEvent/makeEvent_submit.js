
var someArray = [];
Template.makeEvent.rendered = function() {




    var calendar = $('#eventCalendar').fullCalendar({

        dayClick:function(date,allDay,jsEvent,view){

            var theDay =  $.fullCalendar.moment(date).format('YYYY-MM-DD');
            $(this).toggleClass( "toggleOn" );



           if($(this).hasClass("toggleOn"))
           {
               console.log('On');
               someArray.push(theDay);
           }else{
               console.log('Off');
               for(var z = someArray.length; z--;) {
                   if (someArray[z] === theDay) {
                       someArray.splice(z, 1);
                   }
                }
             }


            console.log(theDay);
            console.log(someArray);

        }

    })
};

Template.makeEvent.events({
	'submit form': function(e){
		e.preventDefault();
        Session.set("hideButtons", true);
        var eventDescription = document.getElementById("eventDescription").value;
		var newEvent = {
			'userId': Meteor.userId(),
			'eventName': $(e.target).parent().find('#eventName').val(),
			'description': eventDescription,
            'dates': someArray

			//'targetMonth': $(e.target).parent().find('#monthPicked').val()
		};
        someArray = [];
        console.log(someArray);
		newEvent._id = Events.insert(newEvent);
		Session.set('newEventId', newEvent._id);
		Router.go('eventPage', newEvent);
	}
});