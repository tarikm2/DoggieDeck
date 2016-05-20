angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Dogs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var deckDogs = [{
    id:"1",
    name:"testA"
  },{
    id:"2",
    name:"test B"
  },{
    id:"3",
    name:"test C"
  },{
    id:"4",
    name:"test D"
  },{
    id:"5",
    name:"test E"
  }];

  return {
    all: function() {
      return deckDogs;
    },
    remove: function(dog) {
      deckDogs.splice(deckDogs.indexOf(dog), 1);
    },
    get: function(dogId) {
      for (var i = 0; i < deckDogs.length; i++) {
        if (deckDogs[i].id === parseInt(dogId)) {
          return deckDogs[i];
        }
      }
      return null;
    }
  };
})
.factory('Feed', function(){
  var posts = [{
    dogName: "dog1",
    ownerName: "owner1",
    picureUrl: ".....",
    desc: "its a dog yo"
  },{
    dogName: "dog2",
    ownerName: "owner1",
    picureUrl: ".....",
    desc: "its a dog yo"
  },{
    dogName: "dog3",
    ownerName: "owner2",
    picureUrl: ".....",
    desc: "its a dog yo"
  },{
    dogName: "dog4",
    ownerName: "owner2",
    picureUrl: ".....",
    desc: "its a dog yo"
  },{
    dogName: "dog5",
    ownerName: "owner3",
    picureUrl: ".....",
    desc: "its a dog yo"
  }];

  return {
    all: function() {
      return posts;
    },

  };
});
