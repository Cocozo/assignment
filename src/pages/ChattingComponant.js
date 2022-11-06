import ChattingRoom from "./ChattingRoom";
import "./ChattingComponant_style.css";
import axios from "axios";
import { useState } from "react";
import ModalBasic from "./modal/ModalBasic";

function ChattingComponant() {
  const[messageDatas, setMessageDatas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const url =
    "https://main-chatbot-api-ainize-team.endpoint.ainize.ai/v1/bot/chat";

  function postMessage(message) {
    console.log("send ppost");
    axios
      .post(url, {
        message: message,
      })
      .then((response) => {
        console.log(response.data);
        setMessageDatas((messageDatas) => [
          ...messageDatas,
          {
            message: response.data,
            isMine: false,
            isFirst: messageDatas.length === 0 || messageDatas[messageDatas.length - 1].isMine,
          },
        ]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function onUpdateHandle(event) {
    if (event === "") return;
    setMessageDatas((messageDatas) => [
      ...messageDatas,
      { message: event, isMine: true, isFirst: false },
    ]);
    postMessage("hello world!");
  }

  function showModal() {
    setModalOpen(true);
  };

  function ModalOncloseHandle(event) {
    if(event === true) setMessageDatas([]);
  }


  return (
    <div className="chatting-componant">
      <ChattingRoom value={messageDatas} onUpdate={onUpdateHandle} />
      <div className="menu">
        <img className="menu-image" alt="" src="loader.png"></img>
        <div className="menu-text" onClick={showModal}>
          clear conversation
        </div>
      </div>
      {modalOpen ? <ModalBasic setModalOpen={setModalOpen} onClose = {ModalOncloseHandle}/> : null}
    </div>
  );
}

export default ChattingComponant;