const onSort = target => {
  const merge = function (left, right) {
    const result = [];
    while (left.length !== 0 && right.length !== 0) {
      left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
    }

    return [...result, ...left, ...right];
  };

  const mergeSort = array => {
    if (array.length === 1) return array;

    const middleIndex = Math.floor(array.length / 2);
    const left = array.slice(0, middleIndex);
    const right = array.slice(middleIndex);

    return merge(mergeSort(left), mergeSort(right));
  };

  return mergeSort(target);
};

export default onSort;
