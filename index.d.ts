declare module 'react-style-classes' {
  type argument = string | boolean | null | undefined;

  const classes: (...arg: (argument | Array<argument>)[]) => string;

  export default classes;
}
