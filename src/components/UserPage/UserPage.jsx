import {React, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import NowPlaying from '../NowPlaying/NowPlaying'
import { useHistory } from 'react-router-dom';
//import { DropDownList } from '@progress/kendo-react-dropdowns';
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
const [mood, setMood] = useState('');

  /*class AppComponent extends React.Component {
    mood = [ "Chill", "Energetic", "Sad"];
    state = {
        value: null
    };
  }
  */

  
  const history = useHistory();
  const dispatch = useDispatch();
    const handleSubmit = (event) => {
      event.preventDefault()
      dispatch({
        type: 'SET_MOOD',
        payload: {
          mood: mood
        },
      })
    
      
    
    
    
    
    if(mood==="Sad"){
      
    dispatch({ type: 'FETCH_SAD_PLAYLIST' });
    }else if(mood == "Energetic"){
   
      dispatch({ type: 'FETCH_ENERGETIC_PLAYLIST' });
    }else if (mood=== "Chill"){
      
      dispatch({ type: 'FETCH_CHILL_PLAYLIST' });
    } 
  
      //history.push('/nowPlaying');
      };

   const handleChange = (event) => {
       event.preventDefault()
history.push('/nowPlaying')
      }
      /*
      <DropDownList
                    data={this.mood}
                    value={this.state.value}
                    onChange={this.handleChange} />
                    </div>
                     <button onClick={handleSubmit}> Go to now playing </button>

                    */
    
  return (
    <>
     
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <p> What mood are you feeling? </p> 
      </div>
      <form>
      
      <select name="moodType" onChange={(event) => {setMood(event.target.value)}}>

<option> Chill </option>
<option>Energetic</option>
<option>Sad</option>

</select>
<button onClick={handleSubmit}> Save mood </button>
<button onClick={handleChange}> Go to Your new playlist </button>

     </form>
  
  </>

  );

}


export default UserPage;
