import { Component } from "react"
import Userchat from "../userchat"
import "./index.css"

const userlist = ["Alan", "Bob", "Carol", "Dean", "Elin"]

const msgTime = new Date(),
    curTime = msgTime.getHours() + ':' + msgTime.getMinutes()

const userChatList =
{
    id: "1",
    userName: "PubNub Bot",
    time: curTime,
    userMessage: "Welcome to Team Chat. Send a message now to start interacting with other user in the app",
    isLiked: false
}

class Homepage extends Component {
    state = {
        userName: 'Alan', userMessage: '', isLiked: '', userDataArray: [userChatList], time: curTime,
    }

    onInputElement = (event) => {
        this.setState({ userMessage: event.target.value })
    }

    onSubmitFormel = (event) => {
        const { userName, userMessage, isLiked, time } = this.state
        event.preventDefault();
        let userlistLength = userlist.length
        let randomName = Math.ceil(Math.random() * userlistLength - 1)
        this.setState({ userName: userlist[randomName] })
        this.setState({ time: curTime })
        if (userMessage === "") {
            alert("please enter valid input")
        } else {
            const NewUserDetails = {
                userName,
                time,
                userMessage,
                isLiked,
            }
            this.setState(prevState => ({ userDataArray: [...prevState.userDataArray, NewUserDetails] }))
            this.setState({ userMessage: "" })
        }

    }

    render() {
        const { userDataArray, userMessage } = this.state

        return (
            <div className="home-div">
                <div className="home-main-div">
                    <div className="header-main-div">
                        <div>
                            <h2 className="home-intro-head">Intruduction</h2>
                            <p className="home-intro-para">This Channer For Company Wide Chatter</p>

                        </div>
                        <div>
                            <span>3 | </span>
                            <span>100</span>

                        </div>
                    </div>
                    <div className="home-bottom-div">
                        <div className="homeChatBoxDiv">
                            {
                                userDataArray.map((each) => (
                                    <Userchat userDataArray={each} />
                                ))
                            }
                        </div>
                        <form onSubmit={this.onSubmitFormel}>
                            <input className="home-input" value={userMessage} onChange={this.onInputElement} type="text" />
                        </form>
                    </div>
                </div>
            </div>)
    }
}

export default Homepage