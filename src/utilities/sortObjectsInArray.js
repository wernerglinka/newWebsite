const sortObjInArray = (a, b, criteria) => {
  if (a[criteria] < b[criteria]) {
    return -1;
  }
  if (a[criteria] > b[criteria]) {
    return 1;
  }
  return 0;
};

export default sortObjInArray;
