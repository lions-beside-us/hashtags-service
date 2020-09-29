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
  let  numOfHashTags= randoNumOfHashtags();
  while ( hashtagsArr.length < numOfHashTags ) {
    let hashTag = randoHashTag();
    if ( !hashtagsArr.includes(hashTag) ) {
      hashtagsArr.push(hashTags.masterHashTags[hashTag]);
    }
  }
  return hashtagsArr;
}

for ( let i = 1; i <= numberOfSongs; i++) {
  let tempHashtag = {
    hashtag_id: i,
    song_id: i,
    hashtags: generateArrayOfHashTags()
  }
  hashtagDb.saveHashtag(tempHashtag)
  .then(hashtags => console.log(`hashtag '${hashtags.hashtags}' added`))
  .catch(error => console.error(error.message));
}

