import {Link} from 'react-router-dom'

const Postlayout=({title,body,id})=>{
    
    return(
        <div className="postContainer">
            <h2><Link className="title" state={{ title: title , body:body}} to={`/post/${id}`}>{title}</Link></h2>
        </div>
    )
}
export default Postlayout