import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Edit (){
    const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
    //const editName = useSelector((store) => store.rootReducer.rename;

  /*function handleChange(event) {
    dispatch({ 
      type: 'EDIT_ONCHANGE', 
      payload: { 
        property: 'name', 
        value: event.target.value 
      }
    });

  }
*/
  function handleSubmit(event, playlistId) {
    event.preventDefault();
    

    // PUT REQUEST to /students/:id
    axios.put(`/spotify/${playlist.id}`)
        .then( response => {
            

            // refresh will happen with useEffect on Home
            history.push('/favorites'); // back to list
        })
        .catch(error => {
            console.log('error on PUT: ', error);
        })
    
  };


  return (
    <>
      <h2>Edit playlist name</h2>
      <form onSubmit={handleSubmit}>
       
           <input placeholder="Rename this playlist" onChange={(event) => {setName(event.target.value)}}></input> 
        
        <input type='submit' value='Rename!' />
      </form>
    </>
  );
}
export default Edit;