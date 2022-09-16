
const postlayout =({body,name,email})=>{
    return(
        <div className='userIfnoContainer'>
            <h2>Kommentar</h2>
            <h3>{body}</h3>
            <div className="userInfo">
            <h4>Kommentar av:</h4>
            <h4>Username: {name}</h4>
            <h4>Useremail: {email}</h4>
            </div>
        </div>
    )


}
export default postlayout