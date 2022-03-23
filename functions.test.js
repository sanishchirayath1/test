const functions = require("./functions");

const initDatabase = () => console.log("Database initialized");
const closeDatabase = () => console.log("Database closed");

// beforeEach(initDatabase);
// afterEach(closeDatabase);

// beforeAll(initDatabase);
// afterAll(closeDatabase);

const nameCheck = () => console.log("Checking name...");

describe("checking names", () => {
  beforeEach(nameCheck);

  test("user is sanish", () => {
    const user = "sanish";
    expect(user).toBe("sanish");
  });
  test("user is sunny", () => {
    const user = "sunny";
    expect(user).toBe("sunny");
  });
});

//addition tests
test("Adds 2 + 2 to equal to 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
test("Adds -1 + 2 to equal to 1", () => {
  expect(functions.add(-1, 2)).toBe(1);
});
test("Adds -1 + -1 to equal to -2", () => {
  expect(functions.add(-1, -1)).toBe(-2);
});
test("Adds 0 + 0 to equal to 0", () => {
  expect(functions.add(0, 0)).toBe(0);
});

//substraction tests
test("substracts 2 - 2 to equal to 0", () => {
  expect(functions.subtract(2, 2)).toBe(0);
});
test("substracts -1 - 2 to equal to -3", () => {
  expect(functions.subtract(-1, 2)).toBe(-3);
});
test("substracts -1 - -1 to equal to 0", () => {
  expect(functions.subtract(-1, -1)).toBe(0);
});
test("substracts 0 - 0 to equal to 0", () => {
  expect(functions.subtract(0, 0)).toBe(0);
});

//multiplication tests
test("multiplys 2 * 2 to equal to 4", () => {
  expect(functions.multiply(2, 2)).toBe(4);
});
test("multiplys -1 * 2 to equal to -2", () => {
  expect(functions.multiply(-1, 2)).toBe(-2);
});
test("multiplys -1 * -1 to equal to 1", () => {
  expect(functions.multiply(-1, -1)).toBe(1);
});
test("multiplys 0 * 0 to equal to 0", () => {
  expect(functions.multiply(0, 0)).toBe(0);
});

//division tests
test("divides 2 / 2 to equal to 1", () => {
  expect(functions.divide(2, 2)).toBe(1);
});
test("divides -1 / 2 to equal to -0.5", () => {
  expect(functions.divide(-1, 2)).toBe(-0.5);
});
test("divides -1 / -1 to equal to 1", () => {
  expect(functions.divide(-1, -1)).toBe(1);
});

test("divides 0 / 0 to return error", () => {
  expect(functions.divide(0, 0)).toBe("divide by zero error");
});

test("divides 34 / 0 to return error", () => {
  expect(functions.divide(0, 0)).toBe("divide by zero error");
});

// null tests
test("isNull() should return null", () => {
  expect(functions.isNull()).toBeNull();
});

test("checkValue(null) should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("createEmail(sam, curran, gmail.com) should return sam.curran@gmail.com as email and the use object", () => {
  expect(functions.createEmail("sam", "curran", "gmail.com")).toEqual({
    firstname: "sam",
    lastname: "curran",
    domain: "gmail.com",
    email: "sam.curran@gmail.com",
  });
});

// Api calls
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(4);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
    expect(data.username).toEqual("Bret");
    expect(data.email).toEqual("Sincere@april.biz");
    expect(data).toEqual({
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    });
  });
});
