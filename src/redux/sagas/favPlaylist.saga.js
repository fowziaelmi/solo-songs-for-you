import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
function* getFavs (action) {
    
    try {
      
      const playlist= yield axios.get('/spotify');
      console.log('got a response on playlist:', playlist.data);
      yield put({ type: 'SET_PLAYLIST', payload: playlist.data});
    } catch {
      console.log('error on playlist');
    }
}
function* addFav(action) {
    console.log('in add fav', action);
    yield axios.post('/spotify', action.payload);
    // fetch latest data from server
    try {
      yield put({
        type: 'SET_PLAYLIST',
      });
    } catch (err) {
      console.log('error in adding playlist', err);
    }
  }
function* favsPlaylistSaga() {
    yield takeLatest('FETCH_FAV_PLAYLISTS', getFavs);
    yield takeLatest('ADD_FAV_PLAYLIST', addFav)
   
  }
export default favsPlaylistSaga;