import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import '../Styles/Education.css';
export const Education = () => {
    const EducationState = useSelector(state => state.EducationReducer)
    const PageReducer = useSelector(state => state.PageReducer)
    const dispatch = useDispatch();
    const [school1, setschool1] = useState('');
    const [school2, setschool2] = useState('');
    const [school3, setschool3] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        setschool1(EducationState.school1)
        setschool2(EducationState.school2)
        setschool3(EducationState.school3)
    }, [])

    const validate = () => {
        if (school1 && school2 && school3) {
            return true
        }
        return false
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (validate()) {
            setError('')
            console.log("Submit successful")
            dispatch({ type: 'UPDATESCHOOL', payload: { school1, school2, school3 } })
            dispatch({ type: 'PAGEUPDATE', payload: { personalpage: false, educationpage: false, workexperiencepage: true, uploadphoto: false, finalpage: false } })
            console.log(EducationState)
            console.log(PageReducer)
        }
        else {
            setError("Fill all the details!!")
            console.log('error: fill details')
        }
    }
    const backhandler = () => {
        dispatch({ type: 'PAGEUPDATE', payload: { personalpage: true, educationpage: false, workexperiencepage: false } })
    }

    return (
        <div className="OuterContainer">
            <div className="container">
                <div className="leftPane">
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepe_-8O2pzGPO69XGfMO__h1_QkrU7nX_tNfSBTtvCPRlp9KhHXFLWyM-eL1jlOZlUKU&usqp=CAU" alt="icon"></img>
                    <h2>Step:2</h2>
                    <p className="paragraph">Get to know better by adding your diploma, certificate and education life</p>
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
                        <img className="icon" src="https://cdn-icons-png.flaticon.com/128/599/599334.png" alt="icon"></img>
                        <h3> Education</h3>
                        <p>Inform companies about your education life</p>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="inputWrapper">
                            <label>School</label>
                            <input type="text" onChange={e => setschool1(e.target.value)} defaultValue={EducationState.school1}></input>
                            <label>School</label>
                            <input type="text" onChange={e => setschool2(e.target.value)} defaultValue={EducationState.school2}></input>
                            <label>School</label>
                            <input type="text" onChange={e => setschool3(e.target.value)} defaultValue={EducationState.school3}></input>
                        </div>
                        <div className="buttons">
                            <button onClick={backhandler}>Back</button>
                            <button onClick={onSubmit}>Next</button></div>
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