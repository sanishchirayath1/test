const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => {
    if (num2 === 0) {
      return "divide by zero error";
    }
    return num1 / num2;
  },
  isNull: () => null,
  checkValue: (x) => x,
  createEmail: (firstname, lastname, domain) => {
    return {
      firstname,
      lastname,
      domain,
      email: `${firstname}.${lastname}@${domain}`,
    };
  },
  fetchUser: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error");
  },
};

module.exports = functions;
