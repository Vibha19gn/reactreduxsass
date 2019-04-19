export const actionCreator = (type, ...argKeys) =>
  (...args) => {
    const action = {type};
    argKeys.forEach((key, index) => {
      action[key] = args[index];
    });
    console.log('fdggfghfg===', action);
    return action;
  };
