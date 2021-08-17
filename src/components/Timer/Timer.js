import React, { useState, useEffect } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import Time from './Time/Time';

function Timer({ nation }) {
  const [present, setPresent] = useState(new Date());

  const year = present.getFullYear();
  const month = present.getMonth() + 1;
  const date = present.getDate();
  const day = present.getDay();

  const _month = `${month < 10 ? `0${month}` : month}`;
  const _date = `${date < 10 ? `0${date}` : date}`;

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
            <>
              <Today>{year}년</Today>
              <Today>{_month}월</Today>
              <Today>{_date}일</Today>
              <Today>{getDayKr(day)}요일</Today>
            </>
          ) : (
            <>
              <Today>{getDayEn(day)}</Today>
              <Today>{getMonthEn(month)}</Today>
              <Today>{_date},</Today>
              <Today>{year}</Today>
            </>
          )}
          <Time present={present} />
        </DateBox>
      </Header>
    </TimerBox>
  );
}

export default Timer;

const TimerBox = styled.div`
  display: flex;
`;

const DateBox = styled.div`
  display: flex;
`;

const Today = styled.div`
  margin-right: 10px;
`;
