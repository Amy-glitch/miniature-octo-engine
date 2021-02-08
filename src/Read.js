import { useState, useEffect, useContext } from "react";
//import Review from "./Review";
import dbContext from './Ctx.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Read(props)
{
  const db = useContext(dbContext)
  const [stories,setStories] = useState([]);

    const fetchStories=async()=>{
        const response=db.collection('stories');
        const data=await response.get();
        const s=[];
        data.docs.forEach(item=>{
          let d =item.data();
          d.id = item.id;
           s.push(d);
        })
        setStories(s)
    }


    useEffect(() => {
        fetchStories();
      }, [])



function Item(props)
{
return <div><p><b>{props.data.name}</b><br></br><i>{props.data.authorName}</i><br></br>{props.data.content}</p>
 <div onClick={function() {alert(props.data.id); props.setSid(props.data.id)}}> </div>
</div>
}
//<Link to="/review">Revieww</Link> 
return <div>
   {stories.map(s => {return <Item setSid={props.setSid} data={s}></Item>})}
</div>
}




  