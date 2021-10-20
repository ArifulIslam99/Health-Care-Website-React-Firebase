import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import './Login.css'
const Login = () => {
    const {googleSignIn, gitSignIn, fbSignIn, setUser, setIsLoading, setError, error} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const emailChange = event =>{
        setEmail(event.target.value)
    }
    const PasswordChange = event =>{
        setPassword(event.target.value)
    }
    

    const signInEmail = () =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user)
          console.log(result.user)
          
        })
        .catch((error) => {
           setError(error.message)
        }).finally(()=>setIsLoading(false))
        history.push(uri)
    }

    const history = useHistory();
    const location = useLocation();
    const uri = location.state?.from || '/home';

    const handleGoogle = ()=>{
        googleSignIn()
        .then((result)=>{
            setUser(result.user)
            history.push(uri)
           
        })
        .finally(()=>setIsLoading(false))
    }
    const handleGit = ()=>{
        gitSignIn()
        .then((result)=>{
            setUser(result.user)
            history.push(uri)
        }).catch((error)=>{
            setError(error.message)
        }).finally(()=> setIsLoading(false))
    }
    const handleFacebook = ()=>{
        fbSignIn()
        .then((result)=>{
            setUser(result.user)
            history.push(uri)
        }).catch((error)=>{
            setError(error.message)
        }).finally(()=> setIsLoading(false))
    }
    return (
        <div className="login-form">
            <h2 className="my-5 fw-bold fs-2">Please Sign Into Your Account.</h2>
            <div >
                <form onSubmit={signInEmail}>
                    <label className="mx-1" htmlFor="email">Email: </label>
                    <input onBlur={emailChange} type="email" name="email" id="email" />
                    <br /> <br />
                    <label className="mx-1" htmlFor="password">Password: </label>
                    <input onBlur={PasswordChange} type="password" name="password" id="password" /> <br /> <br />
                    <input type="submit" value="Sign in" />  <br /> <br />
                    <h5 className="text-danger"> {error} </h5>
                </form> 
                
            </div> 

            <div className="my-3">
            <p>Sign in With</p>
            <button onClick={handleGoogle} className="mx-2 btn btn-danger"><i class="fab fa-google"></i></button>
            <button onClick={handleGit} className="btn btn-secondary mx-2"><i class="fab fa-github "></i></button>
            <button onClick={handleFacebook} className="btn btn-info mx-2"><i class="fab fa-facebook"></i></button>
            </div> 
             
             <div>
             <p>-------------------------</p>
             <p>New User ? <Link to='/register'>Create a Account</Link> </p>
              </div>
            
        </div>
    );
};

export default Login;