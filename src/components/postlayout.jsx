import {Link} from 'react-router-dom'

const Postlayout=({title,id})=>{
    
    return(
        <div className="postContainer">
            <h2><Link className="title" state={{ title: title }} to={`/post/${id}`}>{title}</Link></h2>
        </div>
    )
}
export default Postlayout