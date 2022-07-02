const mathOperations = require('./test5.4');

test('mathOperations.sum() - should return sum of two numbers ', () => {
    const result = mathOperations.sum(35, 10);
    expect(result).toBe(45);
});

test('mathOperations.diff() - should return difference of two numbers ', () => {
    const result = mathOperations.diff(35, 10);
    expect(result).toBe(25);
});

test('mathOperations.product() - should return product of two numbers ', () => {
    const result = mathOperations.product(35, 10);
    expect(result).toBe(350);
});