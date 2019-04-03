var dataManager = require('./DataManager.js')

module.exports = {
  addAMemoWishToProfileByHashtag: function(hashtag) {
    return new Promise(function(resolve, reject) {
      dataManager.updateMemoToProfileInDBByHashtag(hashtag).then(function(err) {
        if(err) {

        }

        resolve()
      })
    })
  },

  getMemoWishForProfileByHashtag: function(hashtag) {
    return new Promise(function(resolve, reject) {
      dataManager.retrieveMemoForProfileInDBByHashtag(hashtag).then(function(err, memoCount) {
        if(err) {

        }

        resolve(memoCount)
      })
    })
  }
}
