


// Publish the user directory which everbody can see
Meteor.publish("userlist", function () {
    try{
        return Meteor.users.find({}, {fields: {
            '_id': 1,


            'profile.name': 1,
            'profile.lastname': 1,
            'profile.about': 1,



            'emails[0].address': 1
        }});
    }catch(error){
        console.log(error);
    }
});