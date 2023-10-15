const blacklistErrors = (rules) => {
    rules[1].message = 'RegExp not match any rules';
  };
  
  module.exports = {
    blacklistErrors,
  };