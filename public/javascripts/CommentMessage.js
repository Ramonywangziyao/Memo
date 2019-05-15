var dataManager = require('./DataManager.js')

module.exports = {
  addCommentToProfile: function(hashtag, comment) {
    return new Promise(function(resolve, reject) {
      dataManager.insertCommentToProfileInDB(hashtag, comment).then(function(insertedInfo) {
        console.log(insertedInfo);
      });
    });
  },

  deleteComment: function() {
    return new Promise(function(resolve, reject) {
      // implement later
    });
  }
};
