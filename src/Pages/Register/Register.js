import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Register = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const location = useLocation();
    const uri = location.state?.from || '/home';

    const { setUser, fbSignIn, gitSignIn, setIsLoading,googleSignIn,setError, error} = useAuth();

    const emailChange = event =>{
        setEmail(event.target.value)
    }
    const PasswordChange = event =>{
        setPassword(event.target.value)
    }

    const auth = getAuth();

    const createUser = event =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user)
          event.preventDefault();
          history.push('/login')
        })
        .catch((error) => {
           setError(error.message)
        }).finally(()=>setIsLoading(false));
    }
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
        <div>
            <h1 className="my-5 fw-bold fs-2">Create Account Here.</h1>
            <div>
            <form onSubmit={createUser}>
                
                <label className="mx-2" htmlFor="email">Email: </label>
                <input onBlur={emailChange} type="email" name="email" id="email" /> <br /> <br />
                <label  className="mx-2" htmlFor="password">PassWord: </label>
                <input onBlur={PasswordChange} type="password" name="password" id="password" /> <br /> <br /> 
                <h5 className='text-danger'>{error}</h5>
                
                <input type="submit" value="Register" /> <br /> <br />
            </form>
            </div>
            <div> 
            <p>Sign in With</p>
            <button onClick={handleGoogle} className="mx-2 btn btn-danger"><i class="fab fa-google"></i></button>
            <button onClick={handleGit} className="btn btn-secondary mx-2"><i class="fab fa-github "></i></button>
            <button onClick={handleFacebook} className="btn btn-info mx-2"><i class="fab fa-facebook"></i></button>
            <p>-------------------------</p>
                <p>Already a user ? <Link to="/login">Login Now</Link></p>
            </div>
        </div>
    );
};

export default Register;