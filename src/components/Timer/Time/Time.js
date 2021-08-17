import React from 'react';
import styled from 'styled-components';

function Time({ present }) {
  const hour = present.getHours();
  const minute = present.getMinutes();
  const seconds = present.getSeconds();

  const time = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return (
    <div>
      <Now>{time}</Now>
    </div>
  );
}

export default Time;

const Now = styled.div`
  color: tomato;
`;
