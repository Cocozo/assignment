import "./Modal-style.css";

function Modal(props) {

  const { setModalOpen, onClose } = props;
  function closeModal(e) {
    setModalOpen(false);
    onClose(e)
  };

  return (
    <div className={"container"}>
      <p className="modal-text">
        are you sure you want to clear this conversation?
      </p>
      <div className="select">
        <button onClick={() => closeModal(false)} className="close">
          close
        </button>
        <button onClick={() => closeModal(true)} className="allclear">
          clear
        </button>
      </div>
    </div>
  );
}
export default Modal;
