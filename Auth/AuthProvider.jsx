import { createContext, useEffect, useState } from "react"
import app from "../Firebase.config"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const authContext = createContext(null) 
const Auth = getAuth(app)
const AuthProvider = ({children}) => {
  //user Loading 
const [loading, setLoading] = useState(false);

//create user
const registerUser = (email, password) =>{
  return createUserWithEmailAndPassword(Auth, email, password);
}
//Login user 
const userLogin = (email, password)=>{
  return signInWithEmailAndPassword(Auth, email, password);
}
// update user name
const updateUserName = (user, name) =>{
  return updateProfile(user, {
    displayName: name
  })
}

/// Get login user Data
const [logUser, setLogUser] = useState(null);
useEffect(()=>{
  const subscribe = onAuthStateChanged(Auth, (currentUser)=>{
    setLoading(true)
    setLogUser(currentUser)
  })
  return ()=>{
    subscribe();
  } 

},[])

// User log out
const userLogOut =()=>{
  return signOut(Auth)
}


const userInfo={
  registerUser,
  userLogin,
  updateUserName,
  logUser,
  userLogOut
}
  return (
    <authContext.Provider value={userInfo}>
      {children}
    </authContext.Provider>
      
  )
}

export default AuthProvider
