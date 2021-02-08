import { useState, useEffect,useContext } from "react";
import dbContext from './Ctx.js'
import { useLocation } from "react-router-dom";
import firebase from "firebase/app";
import 'firebase/auth';

export default function Review(props)
  {
  
    const location = useLocation();
    const [story,setStories] = useState({});
    const db = useContext(dbContext)
  alert(location.state.sid);
  alert(location.state.post)
    const fetchStories=async()=>{
    db.collection('stories').doc(location.state.sid).get().then((doc)=>{ 
        let data =doc.data();
        setStories(data)
        });
    }


    useEffect(() => {
        fetchStories();
      }, [])


function Submit()
{

db.collection('stories').doc(location.state.sid).update(
{
  review: document.getElementById('rv').value,
  rating: 5,
  reviewed:true
}

).then(() => {
 Submitt()
});

}

function Submitt()
{
    alert(firebase.auth().currentUser.displayName);
        // Add a new document with a generated id.
    db.collection("stories").add(
      location.state.post
    )
    .then(function(docRef) {
    
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

}



  return <div>
  <textarea rows="20" cols="30" placeholder={story.content}></textarea>
    <textarea id='rv' rows="20" cols="30" placeholder="This is where you shoudl write reviw"></textarea>
    <button  onClick={Submit} style={{display:'block'}}>Submit review to post story!</button>
    </div>
  } //story.cont