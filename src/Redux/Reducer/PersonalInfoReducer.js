
const initialState = {
  firstname: '',
  lastname: '',
  phoneno: '',
  email: '',
  country: '',
  city: '',
  submitted: false
}
function PersonalInfoReducer(state=initialState, action) {
    const {type, payload} = action;
    console.log(state)
    switch (type) {
      case `UPDATEINFO`:
        return {...state, firstname: payload.firstname, lastname: payload.lastname, phoneno: payload.phoneno, email: payload.email, country: payload.country, city: payload.city, submitted: payload.submitted }
      default:
        return state;
    }
   
  }
  
  export default PersonalInfoReducer;