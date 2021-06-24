import React from 'react';
import video1 from '../images/Zerodha.mp4';

const Signup = () => {
    return (
        <div className="signup">
            <div className="signup_container container">
            <div className="mainPage__heading">
					<h1>Zerodha Registration Form</h1>
				</div>
                <div className="signup__main">
                <div className="excelsheet" style={{margin:"0"}}>
                    <iframe title="Registration form" id="myframe" src="https://zerodha.com/iframe-form/?id=zmpsmc" style={{"width":"310px", "height":"400px"}}></iframe>
                </div>
                <video src={video1} width="900" height="400" id="loginVideo" controls="controls" autoplay="true" />
                </div>
                <div className="signup__button">
                <button type="submit" class="glowingButton">After Submitting the Form Please Click Here!</button>
                </div>
            </div> 
        </div>
    )
}

export default Signup
