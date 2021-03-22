const express = require('express');
const axios = require('axios');
const { response } = require('express');

const router = new express.Router();
const token = require('./token.router')
/*
let encodedPayload = new Buffer(payload).toString("base64");
axios.post('https://accounts.spotify.com/api/token',{
  // note the use of querystring
  querystring.stringify({'grant_type':'client_credentials'}),{
  headers: {
    'Content-Type':'application/x-www-form-urlencoded',     
    'Authorization': 'Basic ' + payload
  }
}).then((result) => {
  res.send(result.data);
})
.catch((error) => {
  console.log('spotify request failed', error);
  res.sendStatus(500);
})
*/
// Make post route to get token 


/*
GET /playlist
Responds with one playlist
*/
//const token = response.data.access_token

/*const AuthStr = `Bearer ${token}`; 

router.get('/', (req, res) => {
  axios.get('https://api.spotify.com/v1/browse/categories/party/playlists?', { headers: { 'Authorization': AuthStr } })
    .then((result) => {
      res.send(result.data);
    })
    .catch((error) => {
      console.log('spotify request failed', error);
      res.sendStatus(500);
    })
})


*/
module.exports = router;