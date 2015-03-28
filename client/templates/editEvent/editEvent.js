
var eventData =[];

Template.editEvent.rendered = function() {
    eventData = this.data.dates;

    var calendar = $('#eventCalendar').fullCalendar({



        dayClick:function(date,allDay,jsEvent,view){
            var theDay =  $.fullCalendar.moment(date).format('YYYY-MM-DD');
            $(this).toggleClass( "toggleOn" );


            if($(this).hasClass("toggleOn"))
            {
                console.log('On');
                eventData.push(theDay);
            }else{
                console.log('Off');
                for(var z = eventData.length; z--;) {
                    if (eventData[z] === theDay) {
                        eventData.splice(z, 1);
                    }
                }
            }
            console.log(eventData);
        },
        dayRender: function (date, cell) {

            $.each(eventData,function(index,value){
                $("td[data-date='"+value+"']").addClass('toggleOn');
            });
        }
    })
};

Template.editEvent.events({
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
        eventData =[];
		Router.go('eventPage', {_id: this._id});
	}//closes submit form function
});//closes template events helper