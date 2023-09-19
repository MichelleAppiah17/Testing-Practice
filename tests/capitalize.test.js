const capitalize = require('../codes/capitalize')

test('Capitalize first letter', () => {
    expect(capitalize('michelle')).toBe('Michelle')
});