import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';


function* getPlaylistE(action) {
    
    try {
      
      const playlist= yield axios.get('/playlist/energetic');
      console.log('got a response on playlist:', playlist.data);
      yield put({ type: 'GET_PLAYLIST', payload: playlist.data});
    } catch {
      console.log('error on playlist');
    }
}
function* getPlaylistSad (action){
    try{
        
//const playlistId = action.payload;
     

    const playlist= yield axios.get('/playlist/sad');
    console.log('got a response on playlist:', playlist.data);
    yield put({ type: 'GET_PLAYLIST', payload: playlist.data });
  } catch (err){
    console.log('error on playlist', err);
  }
}
function* getPlaylistChill(action) {
    
    try {
      
     

    
    const playlist= yield axios.get('/playlist/chill');
    console.log('got a response on playlist:', playlist.data);
    yield put({ type: 'GET_PLAYLIST', payload: playlist.data });
  } catch (err){
    console.log('error on playlist', err);
  } 
}
function* playlistSaga() {
    yield takeLatest('FETCH_SAD_PLAYLIST', getPlaylistSad);
    yield takeLatest('FETCH_CHILL_PLAYLIST', getPlaylistChill);
    yield takeLatest('FETCH_ENERGETIC_PLAYLIST', getPlaylistE)
  }
export default playlistSaga;