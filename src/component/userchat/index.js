import "./index.css"

const Userchat = (props) =>{
    const {userDataArray} = props
    const {userName,userMessage,isLiked,time} = userDataArray

    // taking first two letters from the user name
    const newShortName = userName[0] + userName[1]
      
return (
    <li className="chat-list-item">
        <div className="chat-main-div">
            <div className="chat-user-data">
                <h4 className="chat-user-logo">{newShortName.toUpperCase()}</h4></div>
            <div className="chat-user-data-div">
                <div className="chat-user-data"><h3 className="chat-user-name">{userName}</h3> <p className="chat-user-time">{time}</p></div>
                <p className="chat-user-msg">{userMessage}</p></div>
        </div>
    </li>
)}

export default Userchat