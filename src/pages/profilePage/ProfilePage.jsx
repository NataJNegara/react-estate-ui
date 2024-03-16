import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

export default function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="userDetails">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src="https://i.pravatar.cc/36" alt="user picture" />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              Email: <b>jogn@example.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create new post</button>
          </div>
          <List />
          <div className="title">
            <h1>Save List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}
