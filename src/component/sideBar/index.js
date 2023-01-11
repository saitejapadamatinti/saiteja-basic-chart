import "./index.css"

const conversationArray = ["Poland Office", "Intruductions", "India Offic"]

const SideBar = () => {
    return (
        <>
            <div className="side-bar-main-div">
                <div className="side-bar-user-main-div">
                    <div className="side-bar-user-div"><h2>SP</h2></div>
                    <div>
                        <h3 className="home-intro-head">Saiteja Padamatinti</h3>
                        <p className="home-intro-para">Research Nurse</p>
                    </div>
                </div>
                <div className="side-bar-conversation-div">
                    <h3 className="home-intro-head">Conversations</h3>
                    <ul className="side-bar-ul">
                        {
                            conversationArray.map((each) => (
                                <li><div className="side-bar-Conversations-items">
                                <p className="hash-letter-span">#</p> <p>{each}</p>
                            </div></li>
                            ))
                        }
                    </ul>
                </div>
            </div></>
    )
}

export default SideBar