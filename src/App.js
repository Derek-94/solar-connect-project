import React from 'react';
import { Header, Icon, Divider } from 'semantic-ui-react';

const App = () => {
  return (
    <div className="App">
      <Header as="h2" textAlign="center">
        <Icon name="clock" />
        2021년 8월 17일
      </Header>
      <Divider />
      <Header as="h2" textAlign="center">
        이부분에 제가 구현하는 친구가 들어갑니다.
      </Header>
      <Divider />
      <Header as="h2" textAlign="center">
        <Icon name="clock" />
        Tuesday July 20, 2021
      </Header>
    </div>
  );
};

export default App;
