const convertToInternalTime = require("../helperFunctions");
describe('Test converToInternalTime', () => {
  test("5pm to be converted to 17", () => {
    expect(convertToInternalTime("5pm")).toBe(17);
  });
  
  test("7:30pm to be converted to 19.5", () => {
    expect(convertToInternalTime("7:30pm")).toBe(19.5);
  });
  
  test("1:00am to stay as 1", () => {
    expect(convertToInternalTime("1:00am")).toBe(1);
  });  
});
