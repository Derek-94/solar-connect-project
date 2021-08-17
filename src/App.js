import React from 'react';
<<<<<<< HEAD
import { Header, Icon, Divider, Segment } from 'semantic-ui-react';

import Sorting from './pages/Sorting';
=======
import { Header, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import Timer from './components/Timer/Timer';

const NATION = {
  KST: 'ko-KR',
  UTC: 'en-US',
};
>>>>>>> a02a615b9138d45feed94d24372313e00a451267

const App = () => {
  return (
    <Wrapper className="App">
      <Timer nation={NATION.KST} />
      <Divider />
      <Segment color="teal">
        <Sorting />
      </Segment>
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
