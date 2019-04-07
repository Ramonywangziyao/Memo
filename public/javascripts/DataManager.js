const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/memo')
const profileSchema = require('../Schema/profile.model')

const db = mongoose.connection

var Profile = mongoose.model('Profile', profileSchema, 'profile')


module.exports = {
  checkProfileExistInDBByHashtag: function(hashtag) {
    return new Promise(function(resolve, reject) {
      Profile.find({
        hashtag: hashtag
      }, function(err, data) {
        if(err) {
          throw err
        }
        if(data != null) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
  },

  retrieveProfileDataFromDBByHashtag: function(hashtag) {
    return new Promise(function(resolve, reject) {
      Profile.find({
        hashtag: hashtag
      }, function(err, data) {
        if(err) {
          throw err
        }
        if(data != null) {
          resolve(data)
        } else {
          reject("Profile not found.")
        }
      })
    })
  },

  insertProfileToDB: function(profile) {
    return new Promise(function(resolve, reject) {
      var profile = new profileSchema({
        // init profile info here. implement later
      })

      Profile.save(function(err, res) {
        if(err) {
          reject("Error. Unable to insert profile")
        } else {
          // saved
          resolve(true)
        }
      })
    })
  },

  insertCommentToProfileInDB: function(hashtag, comment) {
    return new Promise(function(resolve, reject) {
      Profile.update({
        "hashtag": hashtag
      }, {
        $push: {
          comments: comment
        }
      }, function(err, result) {
        if(err) {
          reject("Error. Unable to insert comment")
        } else {
          resolve("Inserted comment to profile")
        }
      })
    })
  },

  updateMemoToProfileInDBByHashtag: function(hashtag) {
    return new Promise(function(resolve, reject) {
      // update memo count. psudo code here for now
      retrieveMemoForProfileInDBByHashtag(hashtag).then(function(memoCount) {
        Profile.update({
          "hashtag": hashtag
        }, {
          $set: {
            memo: memoCount + 1
          }
        }, function(err, result) {
          if(err) {
            reject("Error. Unable to update memo")
          } else {
            resolve("Profile memo count updated")
          }
        })
      })
    })
  },

  retrieveMemoForProfileInDBByHashtag: function(hashtag) {
    return new Promise(function(resolve, reject) {
      Profile.find({
        hashtag: hashtag
      }, function(err, data) {
        if(err) {
          throw err
        }
        if(data != null) {
          var memoAmount = data.memo
          resolve(memoAmount)
        } else {
          reject("Error retrieving memo data")
        }
      })
    })
  }
}
