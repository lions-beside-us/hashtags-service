const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('../database/index');

const port = 4000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/hashtags', async(req, res) => {
  try {
    const hashtags = await db.getHashtags();
    res.status(200).send({
      success: true,
      count: hashtags.length,
      data: hashtags
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      msg: error
    });
  }
})

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
