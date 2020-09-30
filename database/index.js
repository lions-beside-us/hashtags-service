const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec-soundcloud-hashtags', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('mongodb connected!')
});

// db.dropCollection("hashtags", (err, result) =>  {
//   console.log("Collection dropped");
// });

const hashtagSchema = new mongoose.Schema({
  hashtag_id: {
    type: Number,
    unique: true,
    required: true
  },
  song_id: Number,
  hashtags: [String]
});

const Hashtag = mongoose.model('Hashtag', hashtagSchema);

const saveHashtag = (hashtag) => {
  let newHashtag = new Hashtag({
    hashtag_id: hashtag.hashtag_id,
    song_id:   hashtag.song_id,
    hashtags:  hashtag.hashtags
  });

  // newHashtag.save((err, newHashtag) => {
  //   if (err) return console.error('save error: ', err);
  // });

  return newHashtag.save(newHashtag);
}

const getHashtags = () => {
  return Hashtag.find();
}

const getHashTag = (id) => {
  return Hashtag.find({ song_id: id });
}

module.exports.getHashtags = getHashtags;
module.exports.getHashTag = getHashTag;
module.exports.saveHashtag = saveHashtag;