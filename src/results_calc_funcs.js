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

const getResult = (timeCulculator, veloCalculator, fuelCalculator, 
    timeInSpaceshipCalculator, maxKE, fuelEE, beta, gamma) => {
// function exist in data.js
const {a, m, d, AccUnit, MassUnit, DistUnit, timeUnit, veloUnit, 
    fuelUnit, maxKEUnit, fuelEnergyUnit  }=getDataAndUnits();
    if(!a||!m||!d){return;}
    //----part2 ----
    const AccInStandartUnit = a * handleAccUnitChange('m/s²', AccUnit);
    const MassInStandartUnit = m * handleMassUnitChange('kg', MassUnit);
    const DistInStandartUnit = d * handleDistUnitChange('m', DistUnit);
 
    //---- part4
    const TInStandartUnit = timeCulculator(DistInStandartUnit, AccInStandartUnit);
    const VInStandartUnit = veloCalculator(DistInStandartUnit, AccInStandartUnit);
    const FInStandartUnit = fuelCalculator(DistInStandartUnit, AccInStandartUnit, MassInStandartUnit);
    //part 5 -----
    document.querySelector("input#time").value = format(TInStandartUnit * handleTimeUnitChange(timeUnit, 'sec'));
    document.querySelector("input#velocity").value = format(VInStandartUnit * handleVelocityUnitChange(veloUnit, 'm/s'));
    document.querySelector("input#fuel").value = format(FInStandartUnit * handleMassUnitChange(fuelUnit, 'kg'));

    // Newton model advanced mode
     function handleAvancedMode() {
    //caculate enery in standard unit; 
        const fuelEUS = fuelEE(DistInStandartUnit, AccInStandartUnit, MassInStandartUnit);
        const MKEStandard  = maxKE(DistInStandartUnit, AccInStandartUnit, MassInStandartUnit);
    //show result with the apropriate units; 
        document.querySelector("input#MKE").value=format(MKEStandard * handleEnergyUnit(maxKEUnit, 'j'));
        document.querySelector("input#FEK").value=format(fuelEUS *handleEnergyUnit(fuelEnergyUnit, 'j'));
    }

    handleAvancedMode();

    if (timeInSpaceshipCalculator) {
        const timeInSpaceshipUnit = document.querySelector("select#time-in-spaceship-units").value;
        const TInSpaceshipInStandartUnit = timeInSpaceshipCalculator(DistInStandartUnit, AccInStandartUnit);
        document.querySelector("input#time-in-spaceship").value = format(TInSpaceshipInStandartUnit * handleTimeUnitChange(timeInSpaceshipUnit, 'sec'));
    //  advanced mode with Einstein's model
        handleAvancedMode();
    // calculate beta and gama factors and show them
        document.querySelector("input#beta").value=format(beta(DistInStandartUnit, AccInStandartUnit));
        document.querySelector("input#gamma").value=format(gamma(DistInStandartUnit, AccInStandartUnit));
    } 
}

const calculateNewtonStop = (d, a, m) => {
    const timeCalculator = (d, a) => (2*Math.sqrt(d/a));
    const veloCalculator = (d, a) => (Math.sqrt(a * d));
    const fuelCalculator = (d, a, m) => {
        return ((m * a * d / (2*c * c)) + Math.sqrt(a * d) * m / c);
    };
      // advanced mode 
    const maxKE =  (d, a, m) =>  {
        const v = veloCalculator(d, a);
        return (m * v * v / 2);
    };
    const fuelEE = (d, a, m) =>{
        const fuel = fuelCalculator(d, a, m);
        return fuel * c * c;
    }
     getResult(timeCalculator, veloCalculator, fuelCalculator, null, maxKE, fuelEE);
}

const calculateNewtonSpeed = () => {
    const timeCulculator = (d, a) => (Math.sqrt(2 * d / a));
    const veloCulculator = (d, a) => (Math.sqrt(2 * a * d));
    const fuelCulculator = (d, a, m) => ((m * a * d / (2*c * c)) + Math.sqrt(a * d) * m / c);
    //  advanced mode  
    const maxKE =  (d, a, m) =>  {
        const v = veloCulculator(d, a);
        return (m * v * v / 2);
    };
    const fuelEE = (d, a, m) =>{
        const fuel = fuelCulculator(d, a, m);
        return fuel * c * c;
    }
   getResult(timeCulculator, veloCulculator, fuelCulculator, null, maxKE, fuelEE);

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

    const beta = (d, a) =>{
        const v = veloCulculator(d, a);
        return v/c;
    }
    const gamma = (d,a)=>{
        const b = beta(d, a);
        return 1/Math.sqrt(1-(b*b));
    }
    const maxKE =  (d, a, m) =>  {
        const g = gamma(d, a);
        return ( m*c*c * (g - 1));
    };
    const fuelEE = (d, a, m) =>{
        const fuel = fuelCulculator(d, a, m);
        return fuel * c * c;
    }
   getResult(timeInEarthCulculator, veloCulculator, fuelCulculator, timeInSpaceshipCalculator, maxKE, fuelEE, beta, gamma);

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
    const beta = (d, a) =>{
        const v = veloCulculator(d, a);
        return v/c;
    }
    const gamma = (d,a)=>{
        const b = beta(d, a);
        return 1/Math.sqrt(1-(b*b));
    }
    const maxKE =  (d, a, m) =>  {
        const g = gamma(d, a);
        return ( m*c*c * (g - 1));
    };
    const fuelEE = (d, a, m) =>{
        const fuel = fuelCulculator(d, a, m);
        return fuel * c * c;
    }
   getResult(timeInEarthCulculator, veloCulculator, fuelCulculator, timeInSpaceshipCalculator, maxKE, fuelEE, beta, gamma);
}

/*module.exports = {
    calculateNewtonStop
}*/
