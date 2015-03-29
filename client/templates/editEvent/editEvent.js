/*setup of eventData array, declaring global here so i can edit it in the render and edit events section */
var eventData =[];

Template.editEvent.rendered = function() {
    /*Getting Event data from iron-router and storing it into an array*/
    eventData = this.data.dates;
    /*Rendering Calendar and handling click events*/
    var calendar = $('#eventCalendar').fullCalendar({
        /*DayClick function handling day clicking*/
        dayClick:function(date,allDay,jsEvent,view){
            /*OnClick storing day in DayClicked in a format of YYYY-MM-DD*/
            var DayClicked =  $.fullCalendar.moment(date).format('YYYY-MM-DD')
            /*Toggling class on day td of calendar*/
            $(this).toggleClass( "toggleOn" );

            /*If the day has a class of toggleOn pusinh into the eventData array else looping array and removing it*/
            if($(this).hasClass("toggleOn"))
            {
                console.log('On');
                eventData.push(DayClicked);
            }else{
                console.log('Off');
                for(var z = eventData.length; z--;) {
                    if (eventData[z] === DayClicked) {
                        eventData.splice(z, 1);
                    }
                }
            }
            /*Just logging the array to check for errors*/
            console.log(eventData);
        },
        /*dayRender function handling the intial rendering of days on page load*/
        dayRender: function (date, cell) {
            /*For each item in the eventData onLoad adding the toggleOn class*/
            $.each(eventData,function(index,value){
                $("td[data-date='"+value+"']").addClass('toggleOn');
            });
        }
    })
};
Template.editEvent.events({
    /*Submit function, taking data from page eventName, description, and the array of eventData
    * and storing it to the Events collection tied to the userID*/
    'submit form': function(e){
		e.preventDefault();
		var eventDescription = document.getElementById("editEventDescription").value;
		var updatedEvent = {
			'eventName': $(e.target).parent().find('#editEventName').val(),
			'description': eventDescription,
			//'targetMonth': $(e.target).parent().find('#editMonthPicked').val()
            'dates': eventData
		};
		Events.update(
			{'_id': this._id},
			{$set: 
				{
					eventName: updatedEvent.eventName,
					description: updatedEvent.description,
					//targetMonth: updatedEvent.targetMonth
                    dates: updatedEvent.dates
				}
			}
		);//closes Events.update
        /*resetting the eventData array*/
        eventData =[];
		Router.go('eventPage', {_id: this._id});
        Notifications.success(updatedEvent.eventName, 'Your event was edited successfully');
    }//closes submit form function
});//closes template events helper