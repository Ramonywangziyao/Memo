var removePonSign = function(hashtag) {
  // implementation remove # in front of a Hashtag
  return new Promise(function(resolve, reject) {
    if(hashtag == null || hashtag === null) {
      reject("error")
    }

    var ponIndex = hashtag.indexOf("#")

    if(ponIndex == 0) {
      resolve(hashtag.substring(1, hashtag.length))
    } else {
      resolve(hashtag)
    }
  })
}

var removeExtraSpace = function(hashtag) {
  // implementation remove extra space from left and right
  return new Promise(function(resolve, reject) {
    if(hashtag == null || hashtag === null) {
      reject("error")
    }

    resolve(hashtag.replace(/(^\s+)|(\s+$)/g, ""))

  })
}

module.exports = {
  processHashtag: function(hashtag) {
    return new Promise(function(resolve, reject) {
      removeExtraSpace(hashtag).then(function(hashtagWithoutExtraspace) {
        removePonSign(hashtagWithoutExtraspace).then(function(purifiedHashtag) {
          resolve(purifiedHashtag)
        })
      }).catch(function(errMessage) {
        console.log(errMessage)
      })
    })
  }
}
