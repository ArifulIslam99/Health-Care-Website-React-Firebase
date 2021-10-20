import { useContext } from "react"
import { Authcontext } from "../Contexts/AuthProvider"


const useAuth = () =>{
    return useContext(Authcontext);
}

export default useAuth;