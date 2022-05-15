const initialState = {
    experience1: '',
    experience2: '',
    position1: '',
    position2: ''
  }
  function WorkExperienceReducer(state=initialState, action) {
    const {type, payload} = action;
    switch (type) {
      case `UPDATEEXPERIENCE`:
        return {...state, experience1: payload.experience1, experience2: payload.experience2, position1: payload.position1, position2: payload.position2};
      default:
        return state;
    }
  }
  export default WorkExperienceReducer;