import React from 'react';
import styled from 'styled-components';

function EnDate({ day, month, date, year, getDayEn, getMonthEn }) {
  return (
    <>
      <Today>{getDayEn(day)}</Today>
      <Today>{getMonthEn(month)}</Today>
      <Today>{date},</Today>
      <Today>{year}</Today>
    </>
  );
}

export default EnDate;

const Today = styled.div`
  margin-right: 10px;
`;
