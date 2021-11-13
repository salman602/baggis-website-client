import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from "react";


// initialize firebase authentication
initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google login
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                // save user to the database with google
                saveUser(user.email, user.displayName, 'PUT');

                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    };


    // Register new user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                const newUser = { email, displayName: name };
                setUser(newUser);
                // console.log(user)
                // console.log(newUser)
                // save user to the database with email and password
                saveUser(email, name, 'POST');

                //send name to firebase after creating an user
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    };

    // login user with email and password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    };



    // Observer
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // function for save user information to the database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

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
        admin,
        error,
        isLoading,
        signInUsingGoogle,
        registerUser,
        loginUser,

        logOut
    }

}

export default useFirebase;