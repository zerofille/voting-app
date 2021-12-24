import React from "react";
import "./VoteBtns.css";
import { createVoteRequest } from "../../app/votesSlice";
import { useDispatch } from "react-redux";
import { getVoteRequest } from "../../app/votesSlice";

function VoteBtns({ setModalActive, date }) {
  const dispatch = useDispatch();
  const closeWindow = (n) => {
    return (
      dispatch(createVoteRequest(n)),
      setModalActive(false),
      dispatch(getVoteRequest(date))
    );
  };
  return (
    <div className="wrapper">
      <h1 className="text">Vote for your favorite number!</h1>
      <div className="wrapperBtn">
        <button className="numberBtn" onClick={() => closeWindow(1)}>
          1
        </button>
        <button className="numberBtn" onClick={() => closeWindow(2)}>
          2
        </button>
        <button className="numberBtn" onClick={() => closeWindow(3)}>
          3
        </button>
        <button className="numberBtn" onClick={() => closeWindow(4)}>
          4
        </button>
        <button className="numberBtn" onClick={() => closeWindow(5)}>
          5
        </button>
        <button className="numberBtn" onClick={() => closeWindow(6)}>
          6
        </button>
        <button className="numberBtn" onClick={() => closeWindow(7)}>
          7
        </button>
        <button className="numberBtn" onClick={() => closeWindow(8)}>
          8
        </button>
        <button className="numberBtn" onClick={() => closeWindow(9)}>
          9
        </button>
      </div>
    </div>
  );
}

export default VoteBtns;
