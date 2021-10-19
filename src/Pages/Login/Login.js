import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className="login-form">
            <h2 className="my-5 fw-bold fs-2">Please Sign Into Your Account.</h2>
            <div >
                <form>
                    <label className="mx-1" htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" />
                    <br /> <br />
                    <label className="mx-1" htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" /> <br /> <br />
                    <input type="submit" value="Sign in" />  <br /> <br />
                </form> 
                
            </div> 

            <div className="my-3">
            <p>Sign in With</p>
            <button className="mx-2 btn btn-danger"><i class="fab fa-google"></i></button>
            <button className="btn btn-secondary mx-2"><i class="fab fa-github "></i></button>
            <button className="btn btn-info mx-2"><i class="fab fa-facebook"></i></button>
            </div> 
            <div>
                <p>-------------------------</p>
                <p>New User ? <Link to='/register'>Create a Account</Link> </p>
            </div>
        </div>
    );
};

export default Login;