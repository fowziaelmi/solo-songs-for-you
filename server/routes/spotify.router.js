const express = require('express');
const axios = require('axios');
const { response } = require('express');
const pool = require('../modules/pool');
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
router.post('/', (req, res) => {
  console.log('req;', req.body);
  

  const sqlScript = `INSERT INTO "playlist"
  ("playlist_id", "name", "user_id")
  VALUES ($1, $2, $3);`;

  pool
    .query(sqlScript, [
      req.body.playlist_id, req.body.name, req.body.user_id
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error in POST server', err);
      res.sendStatus(500);
    });
});
router.delete('/:id', (req, res) => {

  let playlistId = req.params.id;
console.log(req.params)
  // access the "item" column to delete where user_id is req.params.id
console.log('playlist id', playlistId)
  let sqlQuery =
    `DELETE FROM "playlist" WHERE id=$1;`; 
  pool
    .query(sqlQuery, [playlistId])
    .then((dbRes) => {
      console.log('DELETE - a response occurred', dbRes);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error('DELETE - an error occurred', err);
      res.sendStatus(500);
    });
});

router.get('/', (req, res) => {


  let queryText = `
        SELECT * FROM "playlist"
        WHERE user_id = $1
    `;
  // Get user ID
  let userId = req.user.id;
  pool
    .query(queryText, [userId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});
router.put('/:id', (req, res) => {
  // Update this single student
 
  const sqlText = `UPDATE "playlist" SET name = $1 WHERE id = $2`;
  pool.query(sqlText, [req.body.github_name, nameUpdate])
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});
module.exports = router;