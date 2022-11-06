import "./chatting_bubble_style.css";
import RobotImage from "./RobotImage.js";

function Chattingbubbles(props) {
  const { message } = props;

  return (
    <div className={message.isMine ? "chat-container" : "chat-container-robot"}>
      {!message.isMine ? <RobotImage isFirst={message.isFirst} /> : null}
      <div className="chat-bubble-container">
        {message.isFirst ? "{robot}" : null}
        <div className={message.isMine ? "chat-bubble" : "chat-bubble-robot"}>
          {message.message}
        </div>
      </div>
    </div>
  );
}

export default Chattingbubbles;