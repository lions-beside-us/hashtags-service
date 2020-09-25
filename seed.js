const hashtagDb = require('./database/index');
const hashTags = require('./tags');
const length = hashTags.masterHashTags.length;
const numberOfSongs = 100;

const randoHashTag = () => {
  return Math.floor(Math.random() * length);
}

const randoNumOfHashtags = () => {
  return Math.floor(Math.random() * 6) + 1;
}

const generateArrayOfHashTags = () => {
  let hashtagsArr = [];
  while ( hashtagsArr.length < randoNumOfHashtags() ) {
    hashtagsArr.push(hashTags.masterHashTags[randoHashTag()]);
  }
  return hashtagsArr;
}

for ( let i = 1; i <= numberOfSongs; i++) {
  let tempHashtag = {
    hashtag_id: i,
    song_id: i,
    hashtags: generateArrayOfHashTags()
  }
  hashtagDb.saveHashtag(tempHashtag);
  console.log(`hashtag '${tempHashtag.hashtags}' added`)
}

