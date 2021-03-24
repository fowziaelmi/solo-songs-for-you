import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NowPlaying from '../NowPlaying/NowPlaying'
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is
function FavoritePage(props) {
    const [playlistFavs, setPlaylistFavs] = useState([]);
    const history = useHistory();
    useEffect(() => {
      getPlaylist();
        }, []);
        const dispatch = useDispatch(); 
       // const editName = useSelector((store) => store.rootReducer.rename);
   

    
    const deletePlaylist = (playlistID) => {
        axios
          .delete(`/spotify/${playlistID}`)
          .then((res) => {
            console.log('successful Delete:', res);
            
          })
          .catch((error) => {
            console.log('error on delete', error);
          });
      }; 
      const getPlaylist = () =>{
    
      axios.get('/spotify')
      .then(res => {
        console.log('result playlist', res.data)
        setPlaylistFavs(res.data)
        console.log(playlistUri, "playlist URI")
        //console.log('playlist favs', playListFavs)
      }).catch(err => {
        console.log('err', err)
      })
    
    }
    const handleClick =() =>{
       /* dispatch({
            type: 'SET_EDIT_NAME',
            payload:
          });
      */
          // Navigate to the /edit component (EditForm)
          history.push('/edit');
        }
    
    console.log('playlist favs', playlistFavs)
    let playlistUri = "https://open.spotify.com/embed/playlist/" + playlistFavs.playlist_id
    return(
        <div>
         <ul>
        {playlistFavs.map((playlist) => {
    return(
      <li key={playlist.id}>
        <h3>{playlist.name}</h3>
        <iframe src={playlistUri} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"> </iframe>
        <button onClick={handleClick}>rename</button>
        <button onClick={() => 
          deletePlaylist(playlist.id)

        }> delete</button>
        );</li>
         ) })}    
      
            </ul>    
           
</div>
        )
}       
export default FavoritePage;
