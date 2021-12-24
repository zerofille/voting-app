import React from "react";
import VoteBtns from "../VoteBtns/VoteBtns";
import "./modal.css";
const Modal = ({ modalActive, setModalActive, date }) => {
  return (
    <div className={modalActive ? "modal active" : "modal"}>
      <div className={modalActive ? "content active" : "content"}>
        <VoteBtns setModalActive={setModalActive} date={date} />
      </div>
    </div>
  );
};

export default Modal;
