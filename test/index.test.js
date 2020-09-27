const handleEnergyUnit = require('../src/unit_convrt_funcs.js')


const factor =  handleEnergyUnit('j', 'mj');

console.log(factor)

function sum (a, b) {
	return a+b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});