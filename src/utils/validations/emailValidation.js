const emailValidation = (email) => {
  const regex = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
  const verify = email.toLocaleLowerCase().match(regex);
  if (verify === null) return false;
};

module.exports = emailValidation;