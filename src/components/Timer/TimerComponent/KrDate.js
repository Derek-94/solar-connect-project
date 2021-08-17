import React from 'react';
import styled from 'styled-components';

function KrDate({ year, month, date, getDayKr, day }) {
  return (
    <>
      <Today>{year}년</Today>
      <Today>{month}월</Today>
      <Today>{date}일</Today>
      <Today>{getDayKr(day)}요일</Today>
    </>
  );
}

export default KrDate;

const Today = styled.div`
  margin-right: 10px;
`;
