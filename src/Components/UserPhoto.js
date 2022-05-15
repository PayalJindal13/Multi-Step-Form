import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import '../Styles/UploadPhoto.css'
export const UserPhoto = () => {
    const PersonalInfoState = useSelector(state => state.PersonalInfoReducer)
    const PageReducer = useSelector(state => state.PageReducer)
    const [file, setFile] = useState('');
    const [error,setError] =useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault()
        if(file){
            console.log("Submit successful")
            dispatch({ type: 'PAGEUPDATE', payload: { personalpage: false, educationpage: false, workexperiencepage: false, uploadphoto: false, finalpage: true } })
        }
        else{
            setError('Please upload photo!!')
        }
    }
    const backhandler = () => {
        dispatch({ type: 'PAGEUPDATE', payload: { workexperiencepage: true, uploadphoto: false } })
    }
    
    
    return (
        <div className="OuterContainer">
            <div className="container">
                <div className="leftPane">
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepe_-8O2pzGPO69XGfMO__h1_QkrU7nX_tNfSBTtvCPRlp9KhHXFLWyM-eL1jlOZlUKU&usqp=CAU" alt="icon"></img>
                    <h2>Step:4</h2>
                    <p>Upload your profile picture and let companies find you fast.</p>
                    <div className="paneWrapper">
                        <div className="navWrapper">
                            <button className={PageReducer.personalpage === true ? 'color-wt round' : 'round'}>1</button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <p className={PageReducer.personalpage === true ? 'color-wt' : ''}>Personal Info</p></div>
                        <div className="navWrapper">
                            <button className={PageReducer.educationpage === true ? 'color-wt round' : 'round'}>2</button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <p className={PageReducer.educationpage === true ? 'color-wt' : ''}>Education</p></div>
                        <div className="navWrapper">
                            <button className={PageReducer.workexperiencepage === true ? 'color-wt round' : 'round'}>3</button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <p className={PageReducer.workexperiencepage === true ? 'color-wt' : ''}>Work Experience</p></div>
                        <div className="navWrapper">
                            <button className={PageReducer.uploadphoto === true ? 'color-wt round' : 'round'}>4</button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <p className={PageReducer.uploadphoto === true ? 'color-wt' : ''}>UserPhoto</p></div>
                    </div>
                </div>
                <div className="rightPane">
                    <div>
                        <img className="icon" src="https://emoji-uc.akamaized.net/orig/3d/c0bfc28ef2db2eebf66879a2dc37ea.png" alt="icon"></img>
                        <h3> User Photo</h3>
                        <p>Upload your profile picture and show yourself</p>
                    </div>
                    <div className="profilebackground">
                        <form>
                            <label for="img">Select image:</label>
                            <input type="file" id="img" name="img" accept="image/*" onChange={e => setFile(e.target.value)} />
                        </form></div>
                    <div>
                        <div>
                            <h2>{PersonalInfoState.firstname},  {PersonalInfoState.lastname}</h2>
                            <h2>{PersonalInfoState.city}, {PersonalInfoState.country}</h2>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={backhandler}>Back</button>
                        <button onClick={onSubmit}>Next</button></div>
                        <div className="error">{error}</div>
                    <div class="navbuttonwrapper">
                        <button className={PageReducer.personalpage === true ? 'selected navbutton' : 'navbutton'}></button>
                        <button className={PageReducer.educationpage === true ? 'selected navbutton' : 'navbutton'}></button>
                        <button className={PageReducer.workexperiencepage === true ? 'selected navbutton' : 'navbutton'}></button>
                        <button className={PageReducer.uploadphoto === true ? 'selected navbutton' : 'navbutton'}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}