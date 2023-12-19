import React, { useEffect, useState, useReducer, Dispatch } from "react";
import "./clock.style.scss";

type InitialStateType = {
  hour: number;
  minutes: number;
  seconds: number;
};

const InitialState: InitialStateType = {
  hour: 0,
  minutes: 0,
  seconds: 0,
};
const getTime = (state: InitialStateType) => {
  let hours = 0,
    minutes = 0,
    seconds = 0;
  if (state.hour > 12) {
    hours = 1;
  }
  if (state.minutes > 60) {
    hours = hours + 1;
    minutes = 0;
  }
  if (state.seconds > 60) {
    minutes = minutes + 1;
    seconds = 0;
  }
  return { hours, minutes, seconds };
};

const ClockScreen = () => {
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const time = getTime(time);
    }, 1000);
  }, []);

  return (
    <div className="clock-main-container">
      <div className="clock-frame">
        <div className="small-needle" />
        <div className="large-needle" />
      </div>
    </div>
  );
};

export default ClockScreen;
