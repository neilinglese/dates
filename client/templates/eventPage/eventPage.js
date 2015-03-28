


Template.eventPage.rendered = function(){




      var eventData = this.data.dates;



    var calendar = $('#eventCalendar').fullCalendar({

        dayClick:function(date,allDay,jsEvent,view){

/*            $(this).toggleClass( "toggleOn" );

            var m = $.fullCalendar.moment(date);

            console.log(m.format('YYYY-MM-DD'));*/
        },
        dayRender: function (date, cell) {

            $.each(eventData,function(index,value){
                $("td[data-date='"+value+"']").addClass('toggleOn');
            });
        }

    })
};
Template.eventPage.helpers({
});




