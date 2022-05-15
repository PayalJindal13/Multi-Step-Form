import { combineReducers } from "redux";
import PersonalInfoReducer from "./PersonalInfoReducer";
import PageReducer from "./pageReducer";
import EducationReducer  from "./EducationReducer";
import WorkExperienceReducer from "./WorkExperienceReducer";
const reducerCombiner = combineReducers({
    PersonalInfoReducer,
    EducationReducer,
    WorkExperienceReducer,
    PageReducer
})
export default reducerCombiner;