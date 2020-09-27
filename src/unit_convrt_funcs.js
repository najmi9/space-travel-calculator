 const format = number => new Intl.NumberFormat().format(number)
   
let handleAccUnitChange = (newUnit, previousUnit) => {
	if (newUnit == previousUnit) {
		return 1;
	}
	const ms = { 'm/s²': 1, 'g': 9.807, 'ft/s²': 0.3048 };
	return ms[previousUnit] / ms[newUnit];
}

const handleMassUnitChange = (newUnit, previousUnit) => {
	if (newUnit == previousUnit) {
		return 1;
	}
	const kg = {
		'kg': 1, 't': 1000, 'Ib': 1 / 2.046, 'stone': 6.35,
		'USton': 907.2, 'LongTon': 1016
	};

	return  kg[previousUnit] / kg[newUnit];
};
const handleDistUnitChange = (newUnit, previousUnit) => {
	console.log(newUnit, previousUnit);
	
	if (previousUnit == newUnit) {
		return 1;
	}
	const asUn = 149597870700;
	const psUn = 30857000000000000;
	const lyear = 9460700000000000;
	const m = {
		'm': 1, 'km': 1000, 'mile': 1609.3, 'ft': 0.3048, 'yd': 0.9144,
		'au': asUn, 'parsec': psUn, 'ly': lyear
	};

	return m[previousUnit] / m[newUnit];
};

const handleTimeUnitChange = (newUnit, previousUnit) => {
	if (previousUnit == newUnit) {
		return 1;
	}
	const sec = {
		'sec': 1, 'min': 60, 'hrs': 3600,
		'dys': 3600 * 24, 'week': 3600 * 7 * 24, 'month': 3600 * 24 * 30,
		'yrs': 3600 * 24 * 365
	}
	return sec[previousUnit] / sec[newUnit];
};

const handleVelocityUnitChange = (newUnit, previousUnit) => {
	
	if (previousUnit == newUnit) {
		return 1;
	}
	const ms = {
		'm/s': 1, 'km/h': 1000 / 3600, 'ft/s': 0.3048, 'mile/h': 1609.3 / 3600
		, 'c': c, 'km/s': 1000, 'mile/s': 1609.3
	}

	return ms[previousUnit] / ms[newUnit];
};


const handleEnergyUnit = (newUnit, previousUnit) =>{
  if (newUnit == previousUnit){
  	  return 1;
  }
  const p = n => Math.pow(10, n);

  const j = {
  	'j':1, 'mj':p(6), 'ft-ibs':1.355818, '12j':p(12), '15j':p(15),
  	'18j':p(18), '21j':p(21), '24j':p(24), 'kj':p(3), 'wh':3600 ,
  	'kwh':3600*p(3) , 'mwh' :3600*p(6)
  }
  return j[previousUnit] / j[newUnit];
}