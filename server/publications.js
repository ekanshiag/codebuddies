Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true });
});

Meteor.publish("learnings", function(limit) {
  return Learnings.find({}, {limit: limit, createdAt: 1});
});

Meteor.publish("ownLearnings", function(limit) {
  return Learnings.find({owner: this.userId}, {limit: limit, createdAt: 1});
});

Meteor.publish("hangouts", function() {
  return Hangouts.find();
});
