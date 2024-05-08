import { render, screen } from "@testing-library/react";
import { sum } from "../helper/utlils";
import exp from "constants";
// test("sum of two integers", () => {
//   const res = sum(1, 2);
//   expect(res).toEqual(3);
// });

// This can be change to test suit: Test suit can contain many test cases inside
describe("Validate function", () => {
  test("sum of two integers", () => {
    const result = sum(1, 4);
    expect(result).toEqual(5);
  });
  it("sum of two integers", () => {
    const result = sum(1, 9);
    expect(result).toEqual(10);
  });
});

// you can also write test case with it
/*
Test GUI: Testing what you desplay in the Graphic User Interface GUI
*/
