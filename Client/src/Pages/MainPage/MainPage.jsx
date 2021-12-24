import React, { useEffect, useState } from "react";
import MyDate from "../../Components/Date/MyDate";
import MyPieChart from "../../Components/PieChart/MyPieChart";
import { useDispatch, useSelector } from "react-redux";
import { getVoteRequest } from "../../app/votesSlice";
import { format } from "date-fns";
import Modal from "../../Components/Modal/Modal";
import "./MainPage.css";

function MainPage(props) {
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const message = useSelector((state) => state.votes.noDataMes);
  
  useEffect(() => {
    dispatch(getVoteRequest(date));
  }, [date]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <MyPieChart />
      <h3 className="message">{message}</h3>
      <MyDate setDate={setDate} date={date} />
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        date={date}
      />
      <button className="btnToVote" onClick={() => setModalActive(true)}>
        VOTE
      </button>

        <a className="link" href="/logs"> SEE LOGS</a>
      
    </div>
  );
}

export default MainPage;
