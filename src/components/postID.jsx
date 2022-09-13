import { useState, useEffect } from 'react';
import {useParams,Link, useLocation } from 'react-router-dom'

const PostID =()=>{
    const [User,setUser]=useState([])
    const {id}= useParams()
    const location = useLocation();
    const {title} = location.state;
    // const [titleState, setTitleState] = useState(title);

    // if(!titleState){
        
    // }

    console.log(title)
    const getuser=()=>{
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response)=>{
                return response.json()
            })
            .then ((data)=>{
                setUser(data[0])
                console.log(data)
            })
            .catch(function(error) {
                console.log(error);
              });
    }
    useEffect(()=>{getuser()},[])
    
    return(
        
        <div className="userContainer">
            <h2>{title}</h2>
            <h3>{User.body}</h3>
            <div className='userIfno'>
            <h4>Username: {User.name}</h4>
            <h4>Useremail: {User.email}</h4>
            </div>
            <button><Link className="btntitle" to="/">Till Start</Link></button>   

        </div>
        
    )

}
export default PostID