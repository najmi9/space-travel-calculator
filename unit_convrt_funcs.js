 const format = number => new Intl.NumberFormat().format(number)
   
let handleAccUnitChange = (newUnit, previousUnit) => {
	let factor = 1;
	if (newUnit == previousUnit) {
		return factor;
	}
	const ms = { 'm/s²': 1, 'g': 9.807, 'ft/s²': 0.3048 };
	if (newUnit == 'm/s²') {
		factor = ms[previousUnit];
	} else {
		factor = ms[previousUnit] / ms[newUnit];
	}
	return factor;
}

const handleMassUnitChange = (newUnit, previousUnit) => {
	let factor = 1;
	if (newUnit == previousUnit) {
		return factor;
	}
	const kg = {
		'kg': 1, 't': 1000, 'Ib': 1 / 2.046, 'stone': 6.35,
		'USton': 907.2, 'LongTon': 1016
	};

	if (newUnit == "kg") {
		factor = kg[previousUnit];
	} else {
		factor = kg[previousUnit] / kg[newUnit];
	}
	return factor;
};
const handleDistUnitChange = (newUnit, previousUnit) => {
	let factor = 1;
	if (previousUnit == newUnit) {
		return factor;
	}
	const asUn = 149597870700;
	const psUn = 30857000000000000;
	const lyear = 9460700000000000;
	const m = {
		'm': 1, 'km': 1000, 'mile': 1609.3, 'ft': 0.3048, 'yd': 0.9144,
		'au': asUn, 'parsec': psUn, 'ly': lyear
	};

	if (newUnit == "m") {
		factor = m[previousUnit];
	} else {
		factor = m[previousUnit] / m[newUnit];
	}
	return factor;
};

const handleTimeUnitChange = (newUnit, previousUnit) => {
	let factor = 1;
	if (previousUnit == newUnit) {
		return factor;
	}
	const sec = {
		'sec': 1, 'min': 60, 'hrs': 3600,
		'dys': 3600 * 24, 'week': 3600 * 7 * 24, 'month': 3600 * 24 * 30,
		'yrs': 3600 * 24 * 365
	}

	if (newUnit == "sec") {
		factor = sec[previousUnit];
	} else {
		factor = sec[previousUnit] / sec[newUnit];
	}
	return factor;
};

const handleVelocityUnitChange = (newUnit, previousUnit) => {
	let factor = 1;
	if (previousUnit == newUnit) {
		return factor;
	}

	const ms = {
		'm/s': 1, 'km/h': 1000 / 3600, 'ft/s': 0.3048, 'mile/h': 1609.3 / 3600
		, 'c': c, 'km/s': 1000, 'mile/s': 1609.3
	}

	if (newUnit == "m/s") {
		factor = ms[previousUnit];
	} else {
		factor = ms[previousUnit] / ms[newUnit];
	}

	return factor;
};
