import React, { useState, useEffect } from 'react';

const TimeClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const Clock = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div id='clock'>
     
      <p id='watch'>{ Clock}</p>
    </div>
  );
};

export default TimeClock;
