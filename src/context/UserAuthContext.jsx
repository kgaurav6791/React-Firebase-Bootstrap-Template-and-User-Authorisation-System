import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

import { UserAuthContext } from "./UserAuthContextBase";

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
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider // THIS LINE WILL MAKE OUR FUNCTIONS AVAILABLE TO ALL THE CHILDREN COMPONENTS(COMPONENTS IN ROUTES)
      value={{ user, logIn, signUp, logOut, googleSignIn }} //UserAuthContext is what we used to createContext.
    >
      {children}
    </UserAuthContext.Provider>
  );
}
