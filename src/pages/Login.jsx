import React from 'react';
import './login.css'; 
import Header from './Header';


function Login() {
    return (
       <>
            <Header/>
            <div className="contain">
                <div className="home">
                  
                    <div className="boxx">
                        <div id="boxin">
                            <h1>Sign in</h1>
                            <div>
                                <label><input id="eml" type="email" placeholder="Email or phone number" /></label>
                            </div>
                            <div>
                                <label><input id="pswrd" type="password" placeholder="Password" /></label>
                            </div>
                            <div>
                                <a href="./home.html" id="sibtnn"><button id="sibtn">Sign In</button></a>
                                <a href="./home.html" id="sibtnn"><button id="sibtn2">Continue With Google</button></a>
                            </div>
                            <div id="sin">
                                <p>Dont Have an account? 
                                <span>   Sign up</span>.</p>
                                <br />
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>
       </>
    );
}

export default Login;
