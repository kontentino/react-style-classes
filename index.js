'use-strict';

export default (...inputArguments) => {
  return Array.from(inputArguments).filter(item => !!item).join(" ");
}
