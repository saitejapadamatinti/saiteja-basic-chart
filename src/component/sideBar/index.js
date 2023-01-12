import "./index.css"
import { AiOutlinePlusCircle } from 'react-icons/ai';

// const conversationArray = ["Poland Office", "Intruductions", "India Offic"]

const SideBar = () => {
    return (
        <>
            <div className="side-bar-main-div">
                <div className="side-bar-user-main-div">
                    <div className="side-bar-user-div">
                        <h2>SP</h2>
                        </div><div className="side-bar-online-dot"></div>
                    <div>
                        <h3 className="home-intro-head">Saiteja Padamatinti</h3>
                        <p className="home-intro-para">Research Nurse</p>
                    </div>
                </div>
                <div className="side-bar-conversation-div">
                    <div className="Conversations-div">
                    <h3 className="Conversations-intro-head">Conversations </h3><div><AiOutlinePlusCircle className="plus-icon" /></div>
                    </div>
                    <ul className="side-bar-ul">
                                <li><div className="side-bar-Conversations-items">
                                <p className="hash-letter-span">#</p> <p>Poland Office</p>
                            </div></li>
                                <li className="side-bar-active"><div className="side-bar-Conversations-items">
                                <p className="hash-letter-span hash-letter-span-active">#</p> <p>Intruductions</p>
                            </div></li>
                                <li><div className="side-bar-Conversations-items">
                                <p className="hash-letter-span">#</p> <p>India Offic</p>
                            </div></li>
                    </ul>
                </div>
            </div></>
    )
}

export default SideBar