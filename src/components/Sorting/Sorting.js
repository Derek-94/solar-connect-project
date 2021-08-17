import React, { useState, useEffect } from 'react';
import onSort from '../../utils/onSort';
import { Input, Button, Icon, Divider, Segment, Loader, Header } from 'semantic-ui-react';
import { SortingStartIcon, SortingWrapper, ResultSpan, ErrorLabel } from '../../style/SortingStyle';

const Sorting = () => {
  const [userInputStr, setUserInputStr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortedUpArray, setSortedUpArray] = useState([]);
  const [sortedDownArray, setSortedDownArray] = useState([]);
  const [inputValidationError, setInputValidationError] = useState(false);

  const onHandleChangeInput = e => {
    setUserInputStr(e.target.value);
    setInputValidationError(e.target.value.match(/[^0-9|,]/g) !== null);
  };

  const onClickSortStart = e => {
    let finalNumbersArray = [];
    const userInputStrToArray = userInputStr.split(',');
    for (let i = 0; i < userInputStrToArray.length; i++) {
      if (userInputStrToArray[i] !== '') {
        finalNumbersArray.push(Number(userInputStrToArray[i]));
      }
    }
    setSortedUpArray(() => onSort(finalNumbersArray));
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    const copiedSortedArr = sortedUpArray.slice();
    copiedSortedArr.reverse();
    setSortedDownArray(copiedSortedArr);
  }, [sortedUpArray]);

  return (
    <SortingWrapper>
      <Input icon="paper plane" placeholder="Input numbers..." onChange={onHandleChangeInput} />
      {inputValidationError && (
        <ErrorLabel basic color="red" pointing>
          숫자만 입력 가능합니다. 🤔
        </ErrorLabel>
      )}
      <Divider />
      {inputValidationError ? (
        <Button disabled icon onClick={onClickSortStart}>
          <SortingStartIcon name="play" /> Start!
        </Button>
      ) : (
        <Button icon onClick={onClickSortStart}>
          <SortingStartIcon name="play" />
          Start!
        </Button>
      )}

      <Divider />
      <Segment color="purple">
        <Header as="h3" textAlign="center" color="purple">
          오름차순 결과
        </Header>
        {sortedUpArray.length > 0 ? (
          <ResultSpan>{sortedUpArray.join(' > ')}</ResultSpan>
        ) : (
          <ResultSpan>숫자 입력 후, start를 눌러주세요.</ResultSpan>
        )}
      </Segment>
      <Divider />
      <Segment color="olive">
        <Header as="h3" textAlign="center" color="olive">
          내림차순 결과
        </Header>
        {isLoading ? (
          <Loader active inline="centered" />
        ) : (
          (sortedDownArray.length === 0 && (
            <ResultSpan>숫자 입력 후, start를 눌러주세요.</ResultSpan>
          )) ||
          (sortedDownArray.length > 0 && <ResultSpan>{sortedDownArray.join(' > ')}</ResultSpan>)
        )}
      </Segment>
    </SortingWrapper>
  );
};

export default Sorting;
