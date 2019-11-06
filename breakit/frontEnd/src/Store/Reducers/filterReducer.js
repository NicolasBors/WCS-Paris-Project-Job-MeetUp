const initialState = {
    isFiltered : false
  }
  
  function toggleFilter(state=initialState, action) {
    let nextState
    switch (action.type) {
      case 'TOGGLE_FILTER':
        console.log('TOGGLE_FILTER',action);
        
        if(state.isFiltered === false) {
          nextState = {
            ...state,
            isFiltered : true
          }
        } else {
            nextState = {
              ...state,
              isFiltered : false
            }
        
        }
        return nextState || state
        default:
          return state
    }
  }
  
  export default toggleFilter