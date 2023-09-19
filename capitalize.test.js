const capitalize = require('./capitalize')

test('Capitalize first letter', () => {
    expect(capitalize('michelle')).toBe('Michelle')
});