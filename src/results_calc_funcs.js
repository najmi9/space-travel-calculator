/**
 * this function do :
 * part1 --> get All numeric values and thier units
 * part2 --> convert the units to standard units |example : convert year to seconds
 * part3 ---> get the units from the results(unit of time, speed and fuel) to see 
 * if the user chose a specific unit.
 * part4 ----> calcul the results (time, speed, fuel) using the standard units
 * part 5 ---> convert the results to the choseen units by user
 * finaly we check if we have the Einstein model and do the same thing !
 */

const getResult = (timeCulculator, veloCalculator, fuelCalculator, timeInSpaceshipCalculator = false) => {
    //----part1
    const a = parseFloat(document.querySelector("input#acceleration").value);
    const AccUnit = document.querySelector("select#acc-units").value;

    const m = parseFloat(document.querySelector("input#mass").value);
    const MassUnit = document.querySelector("select#mass-units").value;

    const d = parseFloat(document.querySelector("input#distance").value.replaceAll(',',''));
    const DistUnit = document.querySelector("select#dist-units").value;

    //----part2 ----
    const AccInStandartUnit = a * handleAccUnitChange('m/s²', AccUnit);
    const MassInStandartUnit = m * handleMassUnitChange('kg', MassUnit);
    const DistInStandartUnit = d * handleDistUnitChange('m', DistUnit);
    // -----part 3 -----
    const timeUnit = document.querySelector("select#time-units").value;
    const veloUnit = document.querySelector("select#velocity-units").value;
    const fuelUnit = document.querySelector("select#fuel-units").value;

    //---- part4
    const TInStandartUnit = timeCulculator(DistInStandartUnit, AccInStandartUnit);
    const VInStandartUnit = veloCalculator(DistInStandartUnit, AccInStandartUnit);
    const FInStandartUnit = fuelCalculator(DistInStandartUnit, AccInStandartUnit, MassInStandartUnit);
    //part 5 -----
    //
   

    document.querySelector("input#time").value = format(TInStandartUnit * handleTimeUnitChange(timeUnit, 'sec'));
    document.querySelector("input#velocity").value = format(VInStandartUnit * handleVelocityUnitChange(veloUnit, 'm/s'));
    document.querySelector("input#fuel").value = format(FInStandartUnit * handleDistUnitChange(fuelUnit, 'kg'));

    if (timeInSpaceshipCalculator) {
        const timeInSpaceshipUnit = document.querySelector("select#time-in-spaceship-units").value;
        const TInSpaceshipInStandartUnit = timeInSpaceshipCalculator(DistInStandartUnit, AccInStandartUnit);
        document.querySelector("input#time-in-spaceship").value = format(TInSpaceshipInStandartUnit * handleTimeUnitChange(timeInSpaceshipUnit, 'sec'));
    }
}


const calculateNewtonStop = () => {
    const timeCulculator = (d, a) => (2*Math.sqrt(d/a));
    const veloCulculator = (d, a) => (Math.sqrt(a * d));
    const fuelCulculator = (d, a, m) => {
        return ((m * a * d / (2*c * c)) + Math.sqrt(a * d) * m / c);
    };
    getResult(timeCulculator, veloCulculator, fuelCulculator);
}

const calculateNewtonSpeed = () => {
    const timeCulculator = (d, a) => (Math.sqrt(2 * d / a));
    const veloCulculator = (d, a) => (Math.sqrt(2 * a * d));
  
    const fuelCulculator = (d, a, m) => ((m * a * d / (2*c * c)) + Math.sqrt(a * d) * m / c);
    getResult(timeCulculator, veloCulculator, fuelCulculator);
}


const calculateEinsteinSpeed = () => {
    const timeInEarthCulculator = (d, a) => Math.sqrt((d * d / (c * c) + 2 * d / a));
    const veloCulculator = (d, a) => {
        const t = timeInEarthCulculator(d, a);
        return (a * t) / Math.sqrt(1 + (a * t / c) * (a * t / c))
    };
    const timeInSpaceshipCalculator = (d, a) => {
        return c / a * Math.acosh(a * d / (c * c) + 1);
    }
    const fuelCulculator = (d, a, m) => {
        const T = timeInSpaceshipCalculator(d, a);
        return m * (Math.exp(a * T / c) - 1)
    };

    getResult(timeInEarthCulculator, veloCulculator, fuelCulculator, timeInSpaceshipCalculator);
}

const catculateEinsteinStop = () => {
    const timeInEarthCulculator = (d, a) => Math.sqrt((d * d / (c * c) + 4 * d / a));
    const veloCulculator = (d, a) => {
        const t = timeInEarthCulculator(d, a);
        return (a * t) / (2 * Math.sqrt(1 + (a * t / (2*c)) * (a * t / (2*c))))
    };
    const timeInSpaceshipCalculator = (d, a) => {
        return 2 * c / a * Math.acosh((a * d /(2* (c * c))) + 1);
    }
    const fuelCulculator = (d, a, m) => {
        const T = timeInSpaceshipCalculator(d, a);
        return m * (Math.exp(a * T / c) - 1)
    };

    getResult(timeInEarthCulculator, veloCulculator, fuelCulculator, timeInSpaceshipCalculator);
}

