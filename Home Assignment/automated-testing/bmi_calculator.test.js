//Task 2. Conduct automated testing
const calculate = require("./bmi_calculator");

test("Check if height is valid", () => {
    expect(calculate.BMI(1, 60)).toBeGreaterThan(0);
})

test("Check if weight is valid", () => {
    expect(calculate.BMI(174, 60)).toBeGreaterThan(0);
})

test("Check if person is under weight by examining if bmi < 18.6", () => {
    expect(calculate.BMI(180, 60)).toBeLessThan(18.6);
})

test("Check if person is normal weight by examining if bmi >= 18.6 && bmi < 24.9", () => {
    expect(calculate.BMI(174, 60)).toBeGreaterThanOrEqual(18.6);
    expect(calculate.BMI(174, 60)).toBeLessThan(24.9);
})

test("Check if person is over weight by examining if bmi >= 24.9", () => {
    expect(calculate.BMI(100, 60)).toBeGreaterThanOrEqual(24.9);
})
