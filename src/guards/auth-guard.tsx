import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { firebaseApp } from "../configs/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import { Unsubscribe } from "@mui/icons-material";
import { useAppSelector } from "../reux-toolkit/hooks";
import { selectAuthState } from "../reux-toolkit/auth/auth-slice";


const AuthGuard = () => {
  const navigate = useNavigate()  
  const auth = getAuth(firebaseApp);
//   const [account,setAccount] = useState<any>(null)

  const {account} = useAppSelector(selectAuthState)
//   useEffect(()=>{
//     const unSubscribed =  onAuthStateChanged(auth, (user)=>{
//         if (user) {
//            setAccount(user) // login
       
//         } else {
//            setAccount(null) // logout
        
//         }
//      })
//      return ()=> unSubscribed()
//   },[])

  if (account === null) {
    return (
        <Navigate to={"/login"}/>
    )
  }
  
  return < Layout />

};

export default AuthGuard;
