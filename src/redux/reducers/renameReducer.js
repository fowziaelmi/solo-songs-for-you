const renameReducer = (state = {}, action) => {
    
    if (action.type === 'SET_EDIT_NAME') {
        return action.payload;
    }

    if (action.type === 'EDIT_ONCHANGE') {
        // For array....
        //return [...state, 'newStuff']

        return {
            ...state,
            [action.payload.property]: action.payload.value
        }
    }

    if (action.type === 'EDIT_CLEAR') {
        return {};
    }

    return state;
}
  export default renameReducer;