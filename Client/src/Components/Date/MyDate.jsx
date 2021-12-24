import React from "react";
import "./MyDate.css";

const MyDate = ({ setDate, date }) => {
  return (
    <div className="wrapperDate">
      <h4 className="statText">STATISTIC FOR </h4>
      <input
      className="dateInput"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
      />
    </div>
  );
};

export default MyDate;
