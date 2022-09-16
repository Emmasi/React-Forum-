
const postlayout =({body,name,email})=>{
    return(
        <div className='userIfnoContainer'>
            <h3>{body}</h3>
            <div className="userInfo">
            <p>Kommentar av:</p>
            <p>Username: {name}</p>
            <p>Useremail: {email}</p>
            </div>
        </div>
    )


}
export default postlayout