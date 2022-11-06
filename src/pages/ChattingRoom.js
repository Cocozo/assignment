import React, { useState, useRef, useEffect } from "react";
import "./ChattingComponant_style.css";
import Chattingbubbles from "./chatting_bubble/chattingbubble";


function ChattingRoom(props) {
  const{value, onUpdate} =props;
  const [inputData, setInputData] = useState('');
  const scrollRef = useRef();

  function onClickHandle(event) {
    onUpdate(event);
    setInputData("");
  }

  function onKeyPressHandle(event) {
    if(event.key === 'Enter'){
      onClickHandle(inputData);
    }
  }

  function onChangeHandle(event) {
    setInputData(event.target.value);
  }

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });
  
  return (
    <div className="ChattingRoom">
      <div className="chatting-room" ref={scrollRef}>
        {value.map((message) => (
          <Chattingbubbles key={message.id} message={message} />
        ))}
        <div className="footer" />
      </div>
      <div className="chatting-textbox">
        <input
          value={inputData}
          onChange={onChangeHandle}
          onKeyPress={onKeyPressHandle}
          type="text"
          className="input-text"
        />
        <img
          src="send.png"
          className="input-button"
          alt=""
          onClick={() => onClickHandle(inputData)}
        />
      </div>
    </div>
  );
}

export default ChattingRoom;
