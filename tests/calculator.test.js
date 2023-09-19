const calculator = require('../codes/calculator')

test('Adds two numbers', () => {
    expect(calculator.add(10,2)).toBe(12)
});

test('subtract two numbers', () => {
    expect(calculator.subtract(7,4)).toBe(3)
});

test('Divide two numbers', () => {
    expect(calculator.divide(45,5)).toBe(9)
});

test('multiply two numbers', () => {
    expect(calculator.multiply(56,5)).toBe(280)
});