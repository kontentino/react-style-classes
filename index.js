const classes = (...arguments) => {
  return Array.from(arguments).filter(item => !!item).join(" ");
};

export default classes;
