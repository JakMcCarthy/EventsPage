const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/social-media-api',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// This is for serving the static page in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../client/build/index.html'));
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
