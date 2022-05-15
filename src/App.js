import logo from './logo.svg';
import './App.css';
import { PersonalInfo } from './Components/PersonalInfo';
import { Education } from './Components/Education';
import { WorkExperience } from './Components/WorkExperience';
import { UserPhoto } from './Components/UserPhoto';
import { Final } from './Components/Final';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function App() {
   const PageReducer = useSelector(state=> state.PageReducer);
   const dispatch = useDispatch()
    if(PageReducer.personalpage){
      return <div className="App">
        <PersonalInfo />
      </div>
    }
    if(PageReducer.educationpage){
      return <div className="App">
      <span></span>
      <span></span>
        <Education />
      </div>
    }
    if(PageReducer.workexperiencepage){
      return <div className="App">
      <span></span>
      <span></span>
        <WorkExperience />
      </div>
    }
    if(PageReducer.uploadphoto){
      return <div className="App">
      <span></span>
      <span></span>
        <UserPhoto />
      </div>
    }
    if(PageReducer.finalpage){
      return <div className="App">
      <span></span>
      <span></span>
        <Final />
      </div>
    }
}

export default App;
