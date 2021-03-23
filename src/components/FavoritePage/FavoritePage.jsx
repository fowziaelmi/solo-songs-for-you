import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NowPlaying from '../NowPlaying/NowPlaying'
import {useSelector} from 'react-redux';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is
function FavoritePage() {
    const playlistFavs = useSelector((store) => store.playlist);
    let playlistUri = "https://open.spotify.com/embed/playlist/" + playlistFavs.playlist_id
    const deletePlaylist = (playlistID) => {
        axios
          .delete(`/spotify/${playlistID}`)
          .then((res) => {
            console.log('successful Delete: ShelfPage', res);
            loadShelf();
          })
          .catch((error) => {
            console.log('error on deleteBook: ShelfPage', error);
          });
      };
    
    return(
        <div>
            {playlistFavs.map((playlist) => {
          return (
            <div key={playlistFavs.id}>
              <h3>{playlistFavs.name}</h3>
              <iframe src={playlistUri} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"> </iframe>
              <button onClick={() => {
                deletePlaylist(playlistFavs.id);
              }}> delete</button>
        </div>
             );
            })}
           
</div>
    )
}

            
export default FavoritePage;