import React from 'react';
import { Header, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import Timer from './components/Timer/Timer';

const NATION = {
  KST: 'ko-KR',
  UTC: 'en-US',
};

const App = () => {
  return (
    <Wrapper className="App">
      <Timer nation={NATION.KST} />
      <Divider />
      <Header as="h2" textAlign="center">
        이부분에 제가 구현하는 친구가 들어갑니다.
      </Header>
      <Divider />
      <Timer nation={NATION.UTC} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
