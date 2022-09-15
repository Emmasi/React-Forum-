import { useState, useEffect } from 'react';
import {useParams,Link, useLocation } from 'react-router-dom'
import Postlayout from './postIdLayout';

const PostID =()=>{
    const [User,setUser]=useState([])
    const {id}= useParams()
    const location = useLocation();
    const {title} = location.state;
    const [titleState, setTitleState] = useState(title);
    if(!titleState){
        fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        .then ((response)=>{
            return response.json
        })
        .then ((data)=>{
            setTitleState(data.title)
            console.log(data)
        })
    }

    const getuser=()=>{
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response)=>{
                return response.json()
            })
            .then ((data)=>{
                setUser(data)
            })
            .catch(function(error) {
                console.log(error);
              });
    }
    useEffect(()=>{getuser(),[]})
    
    return(
        
        <div className="userContainer">
            <h2>{title}</h2>
            {User.map((comment)=><Postlayout body={comment.body} name = {comment.name} email={comment.email}/>)}
        <button><Link className="btntitle" to="/">Till Start</Link></button>   
        </div>
        
    )

}
export default PostID