var dataManager = require('./DataManager.js')
var memoWish = require('./MemoWishs.js')
var comments = require('./CommentMessage.js')

var checkProfileExist = function(hashtag) {
  return new Promise(function(resolve, reject) {
    dataManager.checkProfileExistInDBByHashtag(hashtag).then(function(err, userExist) {
      if(err) {

      }

      if(!userExist) {
        resolve();
      } else {
        reject();
      }
    })
  })
}

module.exports = {

  addProfile: function(hashtag, profile) {
    return new Promise(function(resolve, reject) {
      checkProfileExist(hashtag).then(function() {
        dataManager.insertProfileToDB(profile).then(function(err, insertSucceed) {
          if(err) {

          }

          if(insertSucceed) {
            resolve()
          } else {
            reject()
          }
        })
      })
    })
  },

  retrieveProfile: function(hashtag) {
    return new Promise(function(resolve, reject) {
      checkProfileExist(hashtag).then(function() {
        dataManager.retrieveProfileDataFromDBByHashtag(hashtag).then(function(err, profile) {
          if(err) {

          }

          resolve(profile)
        })
      })
    })
  }
}
