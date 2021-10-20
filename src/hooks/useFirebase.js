import initializeAuthentication from '../Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from 'react';



initializeAuthentication();


const useFirebase = () => {
     const [user, setUser] = useState({});
     const[error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleSignIn =() =>{
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
         
    }   


    const gitSignIn = () =>{
        setIsLoading(true)
       return signInWithPopup(auth, gitProvider)
        
    } 

    const fbSignIn = () =>{
        setIsLoading(true)
        return signInWithPopup(auth, facebookProvider)
        
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user)
            {
                setUser(user)
                
            }
            setIsLoading(false)
        })
        
    })

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        }).finally(()=>setIsLoading(false))
    }

    return {
        user, 
        isLoading,
        googleSignIn,
        logOut,
        gitSignIn,
        fbSignIn,
        error,
        setUser,
        setIsLoading,
        setError
        
    }
};

export default useFirebase;