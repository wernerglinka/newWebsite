const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      func.apply({ ...this });
    }, delay);
  };
};

export default debounce;
