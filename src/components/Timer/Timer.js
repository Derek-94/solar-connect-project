import React, { useState, useEffect } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import KrDate from './TimerComponent/KrDate';
import EnDate from './TimerComponent/EnDate';
import Time from './TimerComponent/Time';

function Timer({ nation }) {
  const [present, setPresent] = useState(new Date());

  const year = present.getFullYear();
  const month = present.getMonth() + 1;
  const date = present.getDate();
  const day = present.getDay();

  const modifiedMonth = `${month < 10 ? `0${month}` : month}`;
  const modifiedDate = `${date < 10 ? `0${date}` : date}`;

  const getDayKr = index => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return days[index];
  };

  const getDayEn = index => {
    const days = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[index];
  };

  const getMonthEn = month => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'Jun',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[month - 1];
  };

  const getDate = () => {
    setPresent(new Date());
  };

  useEffect(() => {
    const runTime = setInterval(() => getDate(), 1000);
    return runTime;
  }, []);

  return (
    <TimerBox>
      <Header as="h2" textAlign="center">
        <DateBox>
          <Icon name="clock" />
          {nation === 'ko-KR' ? (
            <KrDate
              year={year}
              month={modifiedMonth}
              date={modifiedDate}
              day={day}
              getDayKr={getDayKr}
            />
          ) : (
            <EnDate
              year={year}
              month={month}
              date={modifiedDate}
              day={day}
              getDayEn={getDayEn}
              getMonthEn={getMonthEn}
            />
          )}
          <Time present={present} />
        </DateBox>
      </Header>
    </TimerBox>
  );
}

export default Timer;

const TimerBox = styled.div`
  padding: 20px;
  background-color: #e2f6ff;
  width: 500px;
`;

const DateBox = styled.div`
  display: flex;
  color: #00004f;
`;
