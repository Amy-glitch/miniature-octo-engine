
import Write from './Write.js';
import Review from './Review.js';
import ShowWritings from './ShowWritings.js';
import Read from './Read.js';
import Profile from './Profile.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useState} from 'react';


export default function Nav(props)
{
  const [storyId,setSid] = useState(0);

  function myFunction()
  {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return <Router>
  <div className="topnav">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  <a href="#home" className="active">Logo</a>
  <div id="myLinks">
  
    <Link to="/">Home</Link>
    <Link to="/write">Write</Link>
    <Link to="/mywritings">My Writings</Link>
    <Link to="/read">Read</Link>
    <Link to="/profile">Profile</Link>

    </div>
  <a  className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div> 
     <Switch>
            
            <Route path="/write">
           <Write/>
            </Route>

            <Route path="/read">
            <Read setSid={setSid}/>
            </Route>

            <Route path="/profile">
            <Profile/>
            </Route>

            <Route path="/review" >
            <Review />
            </Route>

            <Route path="/mywritings">
            <ShowWritings/>
            </Route>
            

            <Route path="/">
            <h>Welcome!</h>
            </Route>

            
          </Switch>
 
</Router>
}//<Review storid={storyId}/>