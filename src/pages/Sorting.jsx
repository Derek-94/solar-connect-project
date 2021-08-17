import React, { useState } from 'react';
import onSort from '../utils/onSort';
import { Input, Button, Icon, Divider, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const SortingWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Sorting = () => {
  const [userInputStr, setUserInputStr] = useState([]);

  const onChange = e => {
    console.log(e.target.value);
    setUserInputStr(e.target.value);
  };

  const onClick = e => {
    console.log(userInputStr);
  };

  return (
    <SortingWrapper>
      <Input icon="paper plane" placeholder="Input numbers..." onChange={onChange} />
      <Divider />
      <Button icon onClick={onClick}>
        <Icon name="play" />
      </Button>
      <Divider />
      <Segment color="purple">결과1</Segment>
      <Segment color="olive">결과2</Segment>
    </SortingWrapper>
  );
};

export default Sorting;
