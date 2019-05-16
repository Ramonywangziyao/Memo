const mongoose = require('mongoose');
var profileSchema = require('./Schema/profile.model');

const db = 'mongodb://localhost:27017/memo';
mongoose.connect(db, {
  useNewUrlParser: true
});
var dbConnection = mongoose.connection;

//var Profile = mongoose.model('Profile', profileSchema, 'profile')

dbConnection.on('error', console.error.bind(console, "Connection Error"));
dbConnection.on('open', function(){
  console.log("Connected to mongodb");
});


module.exports = {
  checkProfileExistInDBByHashtag: function(hashtag, needDataFlag) {
    return new Promise(function(resolve, reject) {
      profileSchema.find({
        hashtag: hashtag
      }, function(err, data) {
        if(err) {
          throw err;
        }

        var dataExist = data.length > 0 ? true : false;

        if(needDataFlag) {
          var returnedData = dataExist? data[0] : null;
          resolve(returnedData);
        } else {
          resolve(dataExist);
        }

      });
    });
  },

  insertProfileToDB: function(profile) {
    return new Promise(function(resolve, reject) {
      var profileInstance = new profileSchema({
        // init profile info here. implement later
        name: profile.name,
        memo: profile.memo,
        intro: profile.intro,
        comments: profile.comments,
        datePassed: profile.datePassed,
        hashtag: profile.hashtag
      });

      console.log(profileInstance);

      profileInstance.save(function(err, res) {
        console.log(err);
        if(err) {
          reject("Error. Unable to insert profile");
        } else {
          // saved
          resolve(res);
        }
      });
    });
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
          reject("Error. Unable to insert comment");
        } else {
          resolve("Inserted comment to profile");
        }
      });
    });
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
            reject("Error. Unable to update memo");
          } else {
            resolve("Profile memo count updated");
          }
        });
      });
    });
  },

  retrieveMemoForProfileInDBByHashtag: function(hashtag) {
    return new Promise(function(resolve, reject) {
      Profile.find({
        hashtag: hashtag
      }, function(err, data) {
        if(err) {
          throw err;
        }
        if(data != null) {
          var memoAmount = data.memo;
          resolve(memoAmount);
        } else {
          reject("Error retrieving memo data");
        }
      });
    });
  }
};
