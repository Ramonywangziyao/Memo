var dataManager = require('../public/javascripts/dataManager.js')

var sampleProfile = {
  "name": "yilin",
  "memo": 1,
  "intro": "he is a good guy",
  "comments": [],
  "datePassed": "20190501",
  "hashtag": "wuruoyumimi"
}

// insert profile

dataManager.checkProfileExistInDBByHashtag("zi", false).then(function() {
  console.log(arguments[0]);
})




// insert comments

// update memo

// retrieve profile


// retrieve memo


// check profile exist
