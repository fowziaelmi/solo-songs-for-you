
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is
function NowPlaying() {
  //const [songUri, setSongUri] = useState('');
  const [name, setName] = useState('');
  const user = useSelector((store) => store.user);
  //const mood = useSelector((store) => store.mood);
  const dispatch = useDispatch();
  const history = useHistory();
  const playlist = useSelector((store) => store.playlist);
  const nowPlaying = useSelector((store) => store.playlistGetReducer);
  //useEffect(() => {


    /*if(mood.mood==='Sad'){
      
    dispatch({ type: 'FETCH_SAD_PLAYLIST' });
    }else if(mood.mood === 'Energetic'){
   
      dispatch({ type: 'FETCH_ENERGETIC_PLAYLIST' });
    }else{
      
      dispatch({ type: 'FETCH_CHILL_PLAYLIST' });
    }*/
  //}, []);


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
const handleSubmit = () => {
  axios.post('/spotify', {playlist_id: songUri, name: name, user_id: user.id})
    .then((result) => {
     console.log('favorite added:', {})
     dispatch({
      type: 'SET_PLAYLIST',
      payload: {
        playlist_id: songUri, name: name, user_id: user.id
      },
    });
 
    history.push('/favorites');
    })
    
    .catch((err) => {
      console.log('Error in POST client', err);
    });
   
};
//if (nowPlaying.length >= 0){
console.log('now playing', nowPlaying[0].playlists.items[0].id)

let songUri = nowPlaying[0].playlists.items[0].id

//let songUri= nowPlaying[0].playlists.items[0].id
//console.log('songuri', songUri)
let newUri = "https://open.spotify.com/embed/playlist/" + songUri
console.log('newUri', newUri)
  return (
    <div>
      <p>Now Playing Page</p>
      <p><iframe src= {newUri} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
    <input placeholder="Name this playlist" onChange={(event) => {setName(event.target.value)}}></input> 
    <button onClick={handleSubmit}>Like and save</button></div>
  );
}

export default NowPlaying;
//<div className="container"></div>