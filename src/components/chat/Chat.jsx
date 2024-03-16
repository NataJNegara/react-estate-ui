import { useState } from "react";
import "./chat.scss";

export default function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          {[...Array(7)].map((_, i) => (
            <div className="item" key={i}>
              <img src="https://i.pravatar.cc/36" alt="message picture" />
              <span>John DOe</span>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          ))}
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="https://i.pravatar.cc/36" alt="user picture" />
              <span>Jogn Doe</span>
            </div>
            <div className="close" onClick={() => setChat(null)}>
              &times;
            </div>
          </div>
          <div className="center">
            {[...Array(8)].map((_, i) => (
              <div
                className={`chatMessage ${i % 2 !== 0 ? "own" : ""}`}
                key={i}>
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
              </div>
            ))}
          </div>
          <div className="bottom">
            <textarea placeholder="message..."></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
