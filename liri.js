require('dotenv').config()
var Twitter = require('./twitterAPI.js')

const keys = require('./keys.js')

// const spotify = new Spotify(keys.spotify)
const client = new Twitter(keys.twitter)

const command = process.argv[2]

const content = process.argv[3]

switch (command) {
    case 'my-tweets':
        Twitter;
        break;

    case 'spotify-this-song':

        break;

    case 'movie-this':

        break;

    case 'do-what-it-says':

        break;
}