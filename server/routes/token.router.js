const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios =require('axios');
const { response } = require('express');
/**
 * GET route template
 */

/**
 * POST route template
 */
 /*const res = await axios.get('https://httpbin.org/basic-auth/foo/bar', {
  // Axios looks for the `auth` option, and, if it is set, formats a
  // basic auth header for you automatically.
  auth: {
    username: 'foo',
    password: 'bar'
  }
}).then(result => {
  console.log('result',result.data)
  res.send(result.data.access_token);
})
.catch(err => {
  console.log('error on token',err);
})

*/
/*
router.get('/', (req, res) => {
 axios.post('https://accounts.spotify.com/api/token', {
  // Axios looks for the `auth` option, and, if it is set, formats a
  // basic auth header for you automatically.
  auth: {
    username: 'f0f15a7924574297940778aa68f2fabc',
    password: 'a7465ffbca9a49d988a87d4a035e0dcc'
  }
}).then(result => {
  console.log('result',result.data)
  res.send(result.data.access_token);
})
.catch(err => {
  console.log('error on token',err);
})
})
*/

//I will hide this later in env.
/*const client_id= 'f0f15a7924574297940778aa68f2fabc';
const client_secret = 'a7465ffbca9a49d988a87d4a035e0dcc'
router.get('/', (req, res) => {
  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
    'Authorization': `Basic ${client_id} : ${client_secret}`       
  
    },
    params: {
      grant_type: 'client_credentials',
  
    }
  })
 .then(result => {
      console.log('result',result.data)
      res.send(result.data.access_token);
    })
    .catch(err => {
      console.log('error on token',err);
    })
});
*/
/*router.get('/', (req, res) => {
  console.log('in router', req.body)
axios.post('https://accounts.spotify.com/api/token', {
    auth: {
      username: 'f0f15a7924574297940778aa68f2fabc',
      password:'a7465ffbca9a49d988a87d4a035e0dcc'
    },
    headers:{
      'content-type':'application/x-www-form-urlencoded'
    },
    params:{
      'grant_type': 'client_credentials'
    }
  })
  .then(function(response) {
    console.log(response.data, 'api response');
  }).catch(err =>{
    console.log('whoops', err)
  })
})
*/
const getToken = () => {
  return axios({
      method: 'post',
      url:'https://accounts.spotify.com/api/token',
      params: {
          username: 'f0f15a7924574297940778aa68f2fabc',
          password: 'a7465ffbca9a49d988a87d4a035e0dcc',
          
          grant_type :'client_credentials'
          
      },
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  }).then(response => {
      return response.date;
  }).catch(err => {
     console.log('whooooo', err)
  });
};

module.exports = getToken;
