
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is
function NowPlaying() {
  const [songUri, setSongUri] = useState('');
useEffect(() => {
  getToken();
  getPlaylist();
}, []);

function getToken(){
  axios.post('/token')
  .then((res) => {
    
    console.log('res',res);
    console.log(res)
   
  })
  .catch((err) => {
    console.error('error on gettoken', err);
  })
}
  function getPlaylist(){
    getToken();
  axios.get('/getBearer')
  .then(res => {
    console.log('res for bearer', res.data)
    console.log(res.data.playlists.items[0].id)
    setSongUri(res.data.playlists.items[0].id)
    
  }).catch(err => {
    console.log('err', err)
  })
}
let newUri = "https://open.spotify.com/embed/playlist/" + songUri
console.log('newUri', newUri)
  return (
    <div>
      <p>Now Playing Page</p>
      <p><iframe src= {newUri} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
    </div>
  );
}

export default NowPlaying;
//<div className="container"></div>