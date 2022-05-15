const initialState = {
  school1: '',
  school2: '',
  school3: ''
}
function EducationReducer(state=initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case `UPDATESCHOOL`:
      return {...state, school1: payload.school1, school2: payload.school2, school3: payload.school3};
    default:
      return state;
  }
}

export default EducationReducer;