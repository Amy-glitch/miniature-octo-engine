import firebase from "firebase/app";
import 'firebase/auth';
import { useState, useEffect,useContext } from "react";
import dbContext from './Ctx.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
//import Review from "./Review.js";
import { useHistory } from "react-router-dom";

export default function Write(props)
{
    const history = useHistory();
    const db = useContext(dbContext)
    let id;

function Submitt()
{
    alert(firebase.auth().currentUser.displayName);
        // Add a new document with a generated id.
    db.collection("stories").add({
        name: document.getElementById('name').value,
        content:document.getElementById('content').value,
        authorName: firebase.auth().currentUser.displayName,
        authorId: firebase.auth().currentUser.uid,
        reviewed: false
    })
    .then(function(docRef) {
    
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

}

let addObj;
function subClick()
{
 addObj =
    {
        name: document.getElementById('name').value,
        content:document.getElementById('content').value,
        authorName: firebase.auth().currentUser.displayName,
        authorId: firebase.auth().currentUser.uid,
        reviewed: false   
    }

    Rev();
}



const Rev=async()=>{
const response=db.collection('stories');
const data=await response.where("reviewed", "==",false).where("authorId","!=",firebase.auth().currentUser.uid).limit(1).get().then((k)=>{
    alert(k)
    history.push({pathname:"/review", state: {sid:k.docs[0].id, post:addObj}});

}
    );
        

}



    return <div> <label>Name:</label> <input id='name'></input>
        <textarea id='content' rows="20" cols="30" placeholder="This is the default text"></textarea>
  <button onClick={subClick} style={{display:'block'}}>Submit!</button>
  </div>
  }