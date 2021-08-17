import React from 'react';
import Timer from './components/Timer/Timer';
import Sorting from './components/Sorting/Sorting';

import { Divider } from 'semantic-ui-react';
import { SortingSegment, Wrapper } from './style/AppStyle';

const NATION = {
  KST: 'ko-KR',
  UTC: 'en-US',
};

const App = () => {
  return (
    <Wrapper className="App">
      <Timer nation={NATION.KST} />
      <Divider />
      <SortingSegment color="teal">
        <Sorting />
      </SortingSegment>
      <Divider />
      <Timer nation={NATION.UTC} />
    </Wrapper>
  );
};

export default App;
