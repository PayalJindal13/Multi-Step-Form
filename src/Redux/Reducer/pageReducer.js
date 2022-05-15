
const initialState = {
    personalpage: true,
    educationpage: false,
    workexperiencepage: false,
    uploadphoto: false,
    finalpage: false
  }
  function PageReducer(state=initialState, action) {
      const {type, payload} = action;
      console.log(state)
      switch (type) {
        case `PAGEUPDATE`:
          return {...state, personalpage: payload.personalpage, educationpage: payload.educationpage, workexperiencepage: payload.workexperiencepage, uploadphoto: payload.uploadphoto, finalpage: payload.finalpage }
        default:
          return state;
      }
    }
    
    export default PageReducer;