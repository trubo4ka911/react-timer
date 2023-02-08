import { useStopwatch } from "react-timer-hook";
import { BtnStart, BtnPause, BtnReset, BtnContinue, Btn } from "./Timer.styled";

function Timer() {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });
  function formatNumber(number) {
   if (number < 10) {
    number = '0' + number;
  }
  return number;
  }
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Timer</h1>
      <div style={{ fontSize: "100px" }}>
        <span>{formatNumber(days)}</span>:<span>{formatNumber(hours)}</span>:<span>{formatNumber(minutes)}</span>:
        <span>{formatNumber(seconds)}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <Btn>
          <button onClick={start}>{isRunning ? <BtnStart>Start</BtnStart> : <BtnContinue>Continue</BtnContinue>   }</button>
          <BtnPause onClick={pause}>Pause</BtnPause>
          <BtnReset onClick={reset}>Reset</BtnReset>
      </Btn>
    </div>
  );
}
 export default Timer