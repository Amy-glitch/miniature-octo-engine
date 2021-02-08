import './App.css';
import { useState } from 'react';
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import Login from './Login.js';
import Nav from './Nav.js';
import React from "react";
import {DbProvider} from './Ctx.js'


function App() {
  const [log,setLog] = useState(false);

  if(log == true)
  {
  return <DbProvider ><Nav/></DbProvider>
  }
  else
  {
  return   <DbProvider  > <Login setLog={setLog}></Login>  </DbProvider>
  }

}


export default App;
