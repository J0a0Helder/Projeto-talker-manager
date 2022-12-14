const MIN_LENGTH = 6;

const passwordValidation = (password) => {
  if (password.length < MIN_LENGTH) return false;
};

module.exports = passwordValidation;