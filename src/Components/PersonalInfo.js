import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import '../Styles/PersonalInfo.css'
export const PersonalInfo = () => {
    const PersonalInfoState = useSelector(state => state.PersonalInfoReducer)
    const PageReducer = useSelector(state => state.PageReducer)
    const dispatch = useDispatch();
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phoneno, setphoneno] = useState('');
    const [country, setcountry] = useState('');
    const [city, setcity] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        setfirstname(PersonalInfoState.firstname)
        setlastname(PersonalInfoState.lastname)
        setphoneno(PersonalInfoState.phoneno)
        setemail(PersonalInfoState.email)
        setcity(PersonalInfoState.city)
        setcountry(PersonalInfoState.country)
    },[])
    const validate = () => {
        console.log(firstname, lastname, phoneno, email, country, city)
        if (firstname && lastname && phoneno && email && country && city ){
            return true
        }
        return false
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (validate()) {
            setError('')
            console.log("Submit successful")
            dispatch({ type: 'UPDATEINFO', payload: { firstname, lastname, phoneno, email, country, city, submitted: true } })
            dispatch({ type: 'PAGEUPDATE', payload: { personalpage: false, educationpage: true, workexperiencepage: false, uploadphoto: false, finalpage: false } })
            console.log(PageReducer)
        }
        else {
            setError("Fill all the details!!!")
            console.log('error: fill details')
        }
    }
    return (

        <div className="OuterContainer">
            <div className="container">
                <div className="leftPane">
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepe_-8O2pzGPO69XGfMO__h1_QkrU7nX_tNfSBTtvCPRlp9KhHXFLWyM-eL1jlOZlUKU&usqp=CAU" alt="icon"></img>
                    <h2>Step:1</h2>
                    <p className="paragraph">Enter your personal information to get closer to companies</p>
                    <div className="paneWrapper">
                    <div className="navWrapper">
                    <button className={PageReducer.personalpage===true?'color-wt round':'round'} >1</button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p className={PageReducer.personalpage===true?'color-wt':''}> Personal Info</p></div>
                    <div className="navWrapper">
                    <button className={PageReducer.educationpage===true?'color-wt round':'round'}>2</button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p className={PageReducer.education===true?'color-wt':''}>Education</p></div>
                    <div className="navWrapper">
                    <button className={PageReducer.workexperiencepage===true?'color-wt round':'round'}>3</button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p className={PageReducer.workexperiencepage===true?'color-wt':''}>Work Experience</p></div>
                    <div className="navWrapper">
                    <button className={PageReducer.uploadphoto===true?'color-wt round':'round'}>4</button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p className={PageReducer.uploadphoto===true?'color-wt':''}>User Photo</p></div>
                    </div>
                </div>
                <div className="rightPane">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/599/599338.png" alt="icon"></img>
                    <h3> Your Personal Information</h3>
                    <p>Enter you personal information to get closer to companies</p>
                    <form onSubmit={onSubmit}>
                        <div className="fields">
                            <div className="inputWrapper">
                                <label>First Name</label>
                                <input type="text" id="firstname" placeholder="First Name" onChange={e => setfirstname(e.target.value)} defaultValue={PersonalInfoState.firstname}/>
                            </div>
                            <div className="inputWrapper">
                                <label>Last Name</label>
                                <input type="text" id="lastname" placeholder="Last Name" onChange={e => setlastname(e.target.value)} defaultValue={PersonalInfoState.lastname}></input>
                            </div>
                        </div>
                        <div className="fields">
                            <div className="inputWrapper">
                                <label>Phone</label>
                                <input type="text" id="phoneno"placeholder="Phone no." onChange={e => setphoneno(e.target.value)} defaultValue={PersonalInfoState.phoneno}></input>
                            </div>
                            <div className="inputWrapper">
                                <label>E-mail Address</label>
                                <input type="text" id="email" placeholder="E-mail" onChange={e => setemail(e.target.value)} defaultValue={PersonalInfoState.email} ></input>
                            </div>
                        </div>
                        <div className="fields">
                            <div className="selectwrapper">
                                <label>Country</label>
                                <select onChange={e => setcountry(e.target.value)}  defaultValue={PersonalInfoState.country}>
                                    <option value="Select Country">Select Country</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="India">India</option>
                                </select>
                            </div>
                            <div className="selectwrapper">
                                <label>City</label>
                                <select onChange={e => setcity(e.target.value)} defaultValue={PersonalInfoState.city}>
                                    <option value="Select City">Select City</option>
                                    <option value="New Delhi">New Delhi</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Pune">Pune</option>
                                </select>
                            </div>
                        </div>
                        <div className="buttons">
                            <button>Next</button></div>
                    </form>
                    <div className="error">{error}</div>
                    <div class="navbuttonwrapper">
                    <button className={PageReducer.personalpage===true?'selected navbutton':'navbutton'}></button>
                    <button className={PageReducer.educationpage===true?'selected navbutton':'navbutton'}></button>
                    <button className={PageReducer.workexperiencepage===true?'selected navbutton':'navbutton'}></button>
                    <button className={PageReducer.uploadphoto===true?'selected navbutton':'navbutton'}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}