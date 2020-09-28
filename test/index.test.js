const {
	handleEnergyUnit,
	handleVelocityUnitChange,
	handleTimeUnitChange,
	handleDistUnitChange,
	handleMassUnitChange,
	handleAccUnitChange,
} = require('../src/unit_convrt_funcs.js');

test('test mass unit converter function', ()=>{
   expect(handleMassUnitChange('kg', 't')).toBe(1000);
   expect(handleMassUnitChange('stone', 'kg')).toBeCloseTo(0.15747);
   expect(handleMassUnitChange('Ib', 'stone')).toBeCloseTo(14);
   expect(handleMassUnitChange('LongTon', 'Ib')).toBeCloseTo(0.0004464);
   expect(handleMassUnitChange('t', 'USton')).toBeCloseTo(0.9072);
});
	
test('test handleAccUnitChange function', ()=>{
     expect(handleAccUnitChange('m/s²', 'g')).toBeCloseTo(9.807);
     expect(handleAccUnitChange('m/s²', 'ft/s²')).toBeCloseTo(0.3048);
     expect(handleAccUnitChange('g', 'ft/s²')).toBeCloseTo(0.03108);
    
});

test('test handleDistUnitChange function', ()=>{
	expect(handleDistUnitChange('m', 'km')).toBeCloseTo(1000);
	expect(handleDistUnitChange('ft', 'yd')).toBeCloseTo(3);
	expect(handleDistUnitChange('ly', 'parsec')).toBeCloseTo(3.2616);
	expect(handleDistUnitChange('km', 'ly')).toBeCloseTo(9460700000000);
	expect(handleDistUnitChange('mile', 'm')).toBeCloseTo(0.0006214);
	expect(handleDistUnitChange('au', 'ly')).toBeCloseTo(63240.873);
});

test('test handleTimeUnitChange function', ()=>{
   expect(handleTimeUnitChange('sec', 'hrs')).toBeCloseTo(3600);
   expect(handleTimeUnitChange('dys', 'month')).toBeCloseTo(30);
   expect(handleTimeUnitChange('week', 'sec')).toBeCloseTo(0.0000016534);
   expect(handleTimeUnitChange('sec', 'yrs')).toBeCloseTo(365*24*3600);
});


test('test handleVelocityUnitChange function', ()=>{
   expect(handleVelocityUnitChange('ft/s', 'km/s')).toBeCloseTo(3280.83989);
   expect(handleVelocityUnitChange('ft/s', 'm/s')).toBeCloseTo(3.2808);
   expect(handleVelocityUnitChange('ft/s', 'km/s')).toBeCloseTo(3280.839895013123);
   expect(handleVelocityUnitChange('m/s', 'c')).toBeCloseTo(300000000);
   expect(handleVelocityUnitChange('mile/h', 'c')).toBeCloseTo(671099235.6925);
});

test('test handleEnergyUnit function', ()=>{
    expect(handleEnergyUnit('j', 'wh')).toBeCloseTo(3600);
    expect(handleEnergyUnit('j', 'ft-ibs')).toBeCloseTo(1.355818);
    expect(handleEnergyUnit('ft-ibs', 'kwh')).toBeCloseTo(2655223.636);
   
});