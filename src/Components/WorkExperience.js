import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import '../Styles/WorkExperience.css'
export const WorkExperience = () => {
    const ExperienceState = useSelector(state => state.WorkExperienceReducer)
    const PageReducer = useSelector(state => state.PageReducer)
    const dispatch = useDispatch();
    const [experience1, setexperience1] = useState('');
    const [experience2, setexperience2] = useState('');
    const [position1, setposition1] = useState('');
    const [position2, setposition2] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        setexperience1(ExperienceState.experience1)
        setexperience2(ExperienceState.experience2)
        setposition1(ExperienceState.position1);
        setposition2(ExperienceState.position2)
    }, [])

    const validate = () => {
        if (experience1 && experience2 && position1 && position2) {
            return true
        }
        return false
    }
    const nexthandler = (event) => {
        event.preventDefault()
        if (validate()) {
            setError('')
            console.log("Submit successful")
            dispatch({ type: 'UPDATEEXPERIENCE', payload: { experience1, experience2, position1, position2 } })
            dispatch({ type: 'PAGEUPDATE', payload: { personalpage: false, educationpage: false, workexperiencepage: false, uploadphoto: true, finalpage: false } })
            console.log(PageReducer)
        }
        else {
            setError("Fill in all the details!!")
            console.log('error: fill details')
        }
    }
    const backhandler = () => {
        dispatch({ type: 'PAGEUPDATE', payload: { personalpage: false, educationpage: true, workexperiencepage: false, uploadphoto: false, finalpage: false } })
    }
    return (
        <div className="OuterContainer">
            <div className="container">
                <div className="leftPane">
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepe_-8O2pzGPO69XGfMO__h1_QkrU7nX_tNfSBTtvCPRlp9KhHXFLWyM-eL1jlOZlUKU&usqp=CAU" alt="icon"></img>
                    <h2>Step:3</h2>
                    <p>Help companies get to know you better by telling them about your past experiences.</p>
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
                            <p className={PageReducer.uploadphoto === true ? 'color-wt' : ''}>User Photo</p></div>
                    </div>
                </div>
                <div className="rightPane">
                    <div>
                        <img className="icon" src="https://emoji-uc.akamaized.net/orig/e2/7d49d5efe013b81d67ab5d0b63cc81.png" alt="icon"></img>
                        <h3> Work Experiences</h3>
                        <p>Can you talk about your past work experience?</p>
                    </div>
                    <form>
                        <div className="fields">
                            <div className="inputWrapper">
                                <label>Experience 1</label>
                                <input type="text" onChange={e => setexperience1(e.target.value)} defaultValue={ExperienceState.experience1}></input>
                            </div>
                            <div className="inputWrapper">
                                <label>Position</label>
                                <input type="text" onChange={e => setposition1(e.target.value)} defaultValue={ExperienceState.position1}></input>
                            </div>
                        </div>
                        <div className="fields">
                            <div className="inputWrapper">
                                <label>Experience 2</label>
                                <input type="text" onChange={e => setexperience2(e.target.value)} defaultValue={ExperienceState.experience2}></input>
                            </div>
                            <div className="inputWrapper">
                                <label>Position</label>
                                <input type="text" onChange={e => setposition2(e.target.value)} defaultValue={ExperienceState.position2}></input>
                            </div>
                        </div>
                        <div className="buttons">
                            <button onClick={backhandler}>Back</button>
                            <button onClick={nexthandler}>Next</button></div>
                    </form>
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