import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  // EVERYTHING BELOW IS INSIDE THIS FUNCTION COMPONENT CALLED UserAuthContextProvider.
  //ALL ITS CHILDREN ARE ROUTES(FROM APP)(<Routes />), BUT WE CAN SAY THAT ALL ITS CHILDREN  ARE COMPONENTS THESE ROUTES RENDER.
  //FOR EG -->        <Route path="/" element={<Login />} />   THEN THE CHILDREN COMPONENT IS <Login />
  //IT WILL PASS THESE FUCTIONS SUCh as (LOGIN(),SIGNUP(),LOGOUT(),ETC TO ITS CHILDREN) USING  value={{ user, logIn, signUp, logOut, googleSignIn }}
  //SO NOW OUR LOGIN.JS FILE(OR RATHER LOGIN FUNCTION COMPONENT) HAS ACCESS TO signInWithEmailAndPassword(),signOut(auth),signInWithPopup() FUNCTIONS;

  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider // THIS LINE WILL MAKE OUR FUNCTIONS AVAILABLE TO ALL THE CHILDREN COMPONENTS(COMPONENTS IN ROUTES)
      value={{ user, logIn, signUp, logOut, googleSignIn }} //userAuthContext is what we used to createContext.
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  // Even though the 'functions and object user' is now available to child components
  return useContext(userAuthContext); // To actually access these two ,the syntax requires --->>>  const user = useContext(UserContext);
} // so to keep our code clean instead of typing this code in all children(YES THIS WORKS TOO,ALREADY CHECKED)->
// import {useContext} from React;
//import { userAuthContext } from "../context/UserAuthContext";
// const user = useContext(userAuthContext);
//We are doing this part upto const user(user is AN OBJECT RETURNED BY ALL THESE FIREBASE AUTH FUNCTIONS) here and simply exporting the result user object
// this user object(it also have other stuff in it) can simply be imported,destructured and used
// in children in one line.
