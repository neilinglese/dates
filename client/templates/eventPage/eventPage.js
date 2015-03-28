Template.eventPage.rendered = function(){
    /*Getting Event data from iron-router and storing it into an array*/
    var eventData = this.data.dates;
    var calendar = $('#eventCalendar').fullCalendar({
        /*dayRender function handling the intial rendering of days on page load*/
        dayRender: function (date, cell) {
            /*For each item in the eventData onLoad adding the toggleOn class*/
            $.each(eventData,function(index,value){
                $("td[data-date='"+value+"']").addClass('toggleOn');
            });
        }
    })
};
Template.eventPage.helpers({
});




