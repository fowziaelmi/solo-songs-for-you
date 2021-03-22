
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is
function InfoPage() {
  const [songUri, setSongUri] = useState('');
useEffect(() => {
  getToken();;
}, []);

function getToken(){
  axios.post('/token')
  .then((res) => {
    
    console.log('res',res);
    console.log(res)
    axios.get('/getBearer')
    .then(res => {
      console.log('res', res.data)
      console.log(res.data.id)
      setSongUri(res.data.id)
      
    }).catch(err => {
      console.log('err', err)
    })
  })
  .catch((err) => {
    console.error('error on gettoken', err);
  })

}
let newUri = "https://open.spotify.com/embed/track/" + songUri
console.log('newUri', newUri)
  return (
    <div>
      <p>Info Page</p>
      <p><iframe src= {newUri} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
    </div>
  );
}

export default InfoPage;
//<div className="container"></div>