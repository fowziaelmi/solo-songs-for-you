import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
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
function* getPlaylists(action) {
    
    try {
        getToken()
      const playlistId = action.payload;
      console.log('playlistID', playlistId)
      if (mood.mood === 'Energetic'){
      const playlist= yield axios.get('/playlist/energetic');
      console.log('got a response on playlist:', playlist.data);
      yield put({ type: 'GET_PLAYLIST', payload: playlist.data[0] });
    } catch {
      console.log('error on playlist');
    }
}else if(mood.mood === 'Sad'){
    const playlist= yield axios.get('/playlist/sad');
    console.log('got a response on playlist:', playlist.data);
    yield put({ type: 'GET_PLAYLIST', payload: playlist.data[0] });
  } catch {
    console.log('error on playlist');
  }
}else{
    const playlist= yield axios.get('/playlist/chill');
    console.log('got a response on playlist:', playlist.data);
    yield put({ type: 'GET_PLAYLIST', payload: playlist.data[0] });
  } catch {
    console.log('error on playlist');
  } 
}
function* playlistSaga() {
    yield takeLatest('FETCH_PLAYLIST', getPlaylists);

  }
export default playlistSaga;