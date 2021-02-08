import { useState, useContext } from 'react';
import dbContext from './Ctx.js'
import firebase from "firebase/app";
import 'firebase/auth';



export default function Login(props)
{
const db = useContext(dbContext)
const [create,setCreate] = useState(0);

//sign in with email and password!
async function Sign(e)
{ 
e.preventDefault();
const email =document.getElementById('email').value;
const password=document.getElementById('password').value;
firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) =>    
        {
        // Signed in
        var user = userCredential.user;
        props.setLog(true);
    //    props.setUser(user);
        }).catch((error) => 
        {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Failed to sign in!');
        });
}
 

function GoogleSignIn(e)
{
e.preventDefault();
var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    props.setLog(true);
   // props.setUser(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    alert('Failed to sign in with google auth!');
    // ...
  });
}

async function CreateAcc(e)
{
e.preventDefault();

const email =document.getElementById('email').value;
const password=document.getElementById('password').value;
const thing= await firebase.auth().createUserWithEmailAndPassword(email,password);
var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: document.getElementById('username').value,
}).then(function() {
  // Update successful.
  db.collection("users").doc(user.uid).set({name:user.displayName});
  db.collection("users").doc(user.uid).collection('stories').doc('new').set({});
  props.setLog(true);
}).catch(function(error) {
  // An error happened.
});


//props.setUser(thing.user);
}



if (create == true) {
    return <form> <label for="fname">E-mail:</label>
    <input type="text" id="email" name="fname" defaultvalue="John"></input><br></br>
    <label for="lname">Password:</label>
    <input type="text" id="password" name="lname" defaultvalue="Doe"></input><br></br>
    <label for="lname">Username:</label>
    <input type="text" id="username" name="lname" defaultvalue="Doe"></input><br></br>
    <button onClick={function(e){CreateAcc(e,props.setPage, props.setLog)}}>Create Account</button></form>
  } else{
    return  <form>
    <label for="fname">E-mail:</label>
    <input type="text" id="email" name="fname" defaultvalue="John"></input><br></br>
    <label for="lname">Password:</label>
    <input type="text"  id="password" name="lname" defaultvalue="Doe"></input><br></br>
    <button onClick={Sign} >Login</button>
    <button onClick={function(e){e.preventDefault(); setCreate(true) }}>Create Account</button>
    <button onClick={GoogleSignIn}>Sign in with Google</button>
    </form>}

}