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
   // const [playlistFavs, setPlaylistFavs] = useState([]);
    const history = useHistory();
    const favorites = useSelector((store) => store.favsReducer);
    const user = useSelector((store) => store.user);
    useEffect(() => {
        
dispatch({
    type:'FETCH_FAV_PLAYLISTS'
})
  
        }, []);
        const dispatch = useDispatch(); 
       // const editName = useSelector((store) => store.rootReducer.rename);
      // let favoritess = [favorites]
       //console.log('the array', favoritess)
   
       //console.log('favorites are:', [favorites[0]])
    
    const deletePlaylist = (playlistId) => {
        axios
          .delete(`/spotify/${playlistId}`)
          .then((res) => {
            console.log('successful Delete:', res);
            dispatch({
              type:'FETCH_FAV_PLAYLISTS'
            })
          })
          .catch((error) => {
            console.log('error on delete', error);
          });
      }; 
      
     
      
    const handleClick =() =>{
       /* dispatch({
            type: 'SET_EDIT_NAME',
            payload:
          });
      */
          // Navigate to the /edit component (EditForm)
          history.push('/edit');
        }
    
    //console.log('playlist favs', playlistFavs)
/*let favoritess = []
    function getFavss() {

    for (let i = 0 ; i > favorites.length; i++){
        let favoritess = favorites[i]
        console.log('new favorites', favoritess)
        return favoritess
    }
  }

console.log('get faves', getFavss(favoritess))
    
    console.log('playlistUri is', playlistUri)
   // console.log('new favorites', favoritess) */
   //let playlistUri = "https://open.spotify.com/embed/playlist/" 
   //console.log('favorites is this', favorites[0])
   //console.log('this is uri', [favorites].playlist_id)
    return(
        <>
        <div> <h2> Here are your favorite playlists</h2>
         <ul>
        {favorites.map((fav) => {
    return(
      <li key={fav.id}>
        <iframe src = {`https://open.spotify.com/embed/playlist/${fav.playlist_id}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"> </iframe>
        <p>{fav.name} playlist</p>
        <button onClick={handleClick}>rename</button>
        <button onClick={() => 
          deletePlaylist(fav.id)

        }> delete</button>
        );</li>
         ) })}    
      
            </ul>    
           
</div>

        </>
        )
}       
export default FavoritePage;
