import { useEffect, useState } from 'react';

export default function Activities({ activities, onlineTime }) {
  var [date, setDate] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  let realtimeOnlineTime = date - localStorage.getItem('loginTime');
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  };
  let seconds = Math.floor((onlineTime + realtimeOnlineTime) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  const displayOnline = `${padTo2Digits(hours)}:${padTo2Digits(
    minutes
  )}:${padTo2Digits(seconds)}`;
  return (
    <div className='profile_card'>
      <div className='profile_card_header'>My Acitivity</div>
      <b>Time spent on app</b>
      <br />
      {displayOnline}
      <br />
      <b>Activities</b>
      {activities?.reverse().map((a, i) => (
        <div key={i}>{a}</div>
      ))}
    </div>
  );
}
