var dataManager = require('../public/javascripts/dataManager.js')

var sampleProfile = {
  "name": "yilin",
  "memo": 1,
  "intro": "he is a good guy",
  "comments": [],
  "datePassed": "20190501",
  "hashtag": "lin1"
}

// insert profile

dataManager.insertProfileToDB(sampleProfile).then(function(inserted) {
  console.log(inserted)
})




// insert comments

// update memo

// retrieve profile


// retrieve memo


// check profile exist
