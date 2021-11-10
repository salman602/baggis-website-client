import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useState, useEffect } from "react";


// initialize firebase authentication
initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const auth = getAuth();
    // Register new user
    const registerUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                const newUser = { email, displayName: name };
                setUser(newUser);
                // console.log(user)
                // console.log(newUser)
                // save user to the database with email and password
                // saveUser(email, name, 'POST');

                //send name to firebase after creating an user
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
            })
            .catch(err => setError(err.message))
    };

    // login user with email and password
    const loginUser = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

            })
            .catch(error => setError(error.message))
    };

    // Observer
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }

        });
        return () => unsubscribe;
    }, [auth]);

    // logout 
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        user,
        registerUser,
        loginUser,
        logOut
    }

}

export default useFirebase;