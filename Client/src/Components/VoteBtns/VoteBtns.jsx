import React from "react";
import "./VoteBtns.css";
import { createVoteRequest } from "../../app/votesSlice";
import { useDispatch } from "react-redux";
import { getVoteRequest } from "../../app/votesSlice";
import { initialState } from "../../app/votesSlice";
function VoteBtns({ setModalActive, date }) {
  const dispatch = useDispatch();
  const closeWindow = (n) => {
    return (
      dispatch(createVoteRequest(n)),
      setModalActive(false),
      dispatch(getVoteRequest(date))
    );
  };

  console.log(initialState.data);
  return (
    <div className="wrapper">
      <h1 className="text">Vote for your favorite number!</h1>
      <div className="wrapperBtn">
        {initialState.data.map((i) => {
          return (
            <button
              key={i.voted_number}
              className="numberBtn"
              onClick={() => closeWindow(i.voted_number)}
            >
              {i.voted_number}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default VoteBtns;
