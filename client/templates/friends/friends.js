Template.friends.rendered = function() {


};

theSearchResults = new Meteor.Collection('theSearchResults');

Template.friends.events({'submit form' : function(event, template) {
    event.preventDefault(); //prevent page reload
    var email = event.target.Email.value;
    var result = {
        'result' : Meteor.users.find({ "emails.address" : email })
    };

    console.log(result);

}});

