const mathOperations = require('./test5.4');

test('mathOperations.sum() - should return sum of two numbers ', () => {
    const result = mathOperations.sum(25, 10);
    expect(result).toBe(35);
});

test('mathOperations.diff() - should return difference of two numbers ', () => {
    const result = mathOperations.diff(25, 10);
    expect(result).toBe(15);
});

test('mathOperations.product() - should return product of two numbers ', () => {
    const result = mathOperations.product(25, 10);
    expect(result).toBe(250);
});