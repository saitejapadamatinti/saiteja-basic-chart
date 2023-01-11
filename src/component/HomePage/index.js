import { Component } from "react"
import Userchat from "../userchat"
import "./index.css"

const userlist = ["Alan", "Bob", "Carol", "Dean", "Elin"]

const userChatList =
{
    id: "1",
    userName: "PubNub Bot",
    time: "12:05",
    userMessage: "Welcome to Team Chat. Send a message now to start interacting with other user in the app",
    isLiked: false
}


class Homepage extends Component {
    state = {
        userName: 'Alan', userMessage: '', isLiked: '', userDataArray: [userChatList]
    }

    onInputElement = (event) => {
        this.setState({ userMessage: event.target.value })
    }

    onSubmitFormel = (event) => {
        const { userName, userMessage, isLiked } = this.state
        event.preventDefault();
        let userlistLength = userlist.length
        let randomName = Math.ceil(Math.random() * userlistLength - 1)
        this.setState({ userName: userlist[randomName] })
        if (userMessage === "") {
            alert("please enter valid input")
        } else {
            const NewUserDetails = {
                userName,
                time: "12:05",
                userMessage,
                isLiked,
            }
            this.setState(prevState => ({ userDataArray: [...prevState.userDataArray, NewUserDetails] }))
            this.setState({ userMessage: "" })
        }

    }

    render() {
        const { userDataArray, userMessage } = this.state
        console.log(userDataArray)


        return (
            <div className="home-main-div">
                <div className="header-main-div">
                    <div>
                        <h1>Intruduction</h1>
                        <p>This Channer For Company Wide Chatter</p>

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
            </div>)
    }
}

export default Homepage