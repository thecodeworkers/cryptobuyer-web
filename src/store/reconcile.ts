const reconcile = state => {
  const keyNames = Object.keys(state);
  let trueState = {}

  keyNames.forEach(key => {
    switch (key) {
      case 'scrollReference':
        const currentScrollReference = state[key]
        trueState = { ...trueState, scrollReference: currentScrollReference }
        break

      default:
        break
    }
  });

  return trueState
}

export default reconcile
