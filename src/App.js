import React from 'react';
import { Header, Icon, Divider, Segment } from 'semantic-ui-react';

import Sorting from './pages/Sorting';

const App = () => {
  return (
    <div className="App">
      <Header as="h2" textAlign="center">
        <Icon name="clock" />
        2021년 8월 17일
      </Header>
      <Divider />
      <Segment color="teal">
        <Sorting />
      </Segment>
      <Divider />
      <Header as="h2" textAlign="center">
        <Icon name="clock" />
        Tuesday July 20, 2021
      </Header>
    </div>
  );
};

export default App;
