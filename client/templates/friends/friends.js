Template.friends.rendered = function() {


};



Template.friends.events({

    'submit form' : function(event, template) {
    event.preventDefault(); //prevent page reload



    var email = event.target.Email.value;
    var result =  Meteor.users.findOne({'emails.address': {$regex:email,$options:'i'}});



    console.log(result.profile.name);
    console.log(result.profile.lastname);

    console.log(result.profile.about);
    console.log(result._id);

    },

    'click .addBtn': function(e){
        e.preventDefault();
        var thisId = this._id;
        console.log(thisId)
    }

});

Template.friends.helpers({

    userDirectory: function () {
        return Meteor.users.find();
    }
});