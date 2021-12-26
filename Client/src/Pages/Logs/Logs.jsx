import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogsRequest } from "../../app/logsSlice";
import "./Logs.css";
function Logs(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLogsRequest());
  }, []);

  const logsArr = useSelector((state) => state.logs.data);
  console.log(logsArr);
  return (
    <div className="mainWrapper">
      <ol>
        {logsArr.map((i) => {
          return (
            <li className="dataWrapper">
              <p className="logData">url:{i.url}</p>
              <p className="logData">
                {/* body:{i.json.date || i.json.voted_number} */}
                body:{JSON.stringify(i.json)}
              </p>
              <p className="logData">date:{i.createdAt}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Logs;
