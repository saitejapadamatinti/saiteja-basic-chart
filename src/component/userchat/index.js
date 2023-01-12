import "./index.css"
import { SlLike } from "react-icons/sl"
import { useState } from "react"



const Userchat = (props) => {
    const { userDataArray } = props
    const { userName, userMessage, time, backgroundColor } = userDataArray

    const [likesCount, setLikesCount] = useState(0)

    // taking first two letters from the user name
    const newShortName = userName[0] + userName[1]

    const onlikeButtonClick = () => {
        setLikesCount(likesCount + 1)
    }

    const likedClass = likesCount !== 0 ? "user-likes-color" : ""

    return (
        <li className="chat-list-item">
            <div className="chat-main-div">
                <div className="chat-user-data">
                    <h4 style={{backgroundColor:backgroundColor}} className="chat-user-logo">{newShortName.toUpperCase()}</h4></div>
                <div className="chat-user-data-div">
                    <div className="chat-user-data"><h3 className="chat-user-name">{userName}</h3> <p className="chat-user-time">{time}</p></div>
                    <div className="chat-user-msg-like-div">
                        <p className="chat-user-msg">{userMessage}</p>
                        <div>
                            <button className="like-btn" onClick={onlikeButtonClick}>
                                <SlLike className={likedClass} />  <span>{likesCount}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Userchat