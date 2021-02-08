import { useState, useEffect, useContext } from "react";
import dbContext from './Ctx.js'
import firebase from "firebase/app";
import 'firebase/auth';

export default  function ShowWritings(props)
{
    const [stories,setStories] = useState([]);
    const db = useContext(dbContext)

    const fetchStories=async()=>{
        const response=db.collection('stories');
        const data=await response.where("authorId", "==",firebase.auth().currentUser.uid).get();
        const s=[];
        data.docs.forEach(item=>{
           s.push(item.data());
        })
        setStories(s)
    }


    useEffect(() => {
        fetchStories();
      }, [])


     



function Item(props)
{
    return <div><p><b>{props.data.name}<br></br></b>{props.data.content}</p></div>
}


return <div>
    {stories.map(s => {return <Item data={s}></Item>})}
</div>
}
