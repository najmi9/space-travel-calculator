# space-travel-calculator
# Imad Najmi
___

# Used equations are : 
| Model/Aim            | Einstein's Model | Newton's Model                                                                                            |
| -------------------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| Arrive at Full Speed |                  | time= $2*\sqrt(d/a)$, velocity =  sqrt(a*d), fuel =  (m * a * d / (2*c * c)) + Math.sqrt(a * d) * m / c |
| Arrive and Stop      |                  |                                                                                                           |
contact me  : imadnajmi9@gmail.com

[List_of_nearest_stars_and_brown_dwarfs#List](https://en.wikipedia.org/wiki/List_of_nearest_stars_and_brown_dwarfs#List)

```javascript

const calculateNewtonStop = () => {

    const timeCulculator = (d, a) => (2*Math.sqrt(d/a));
    const veloCulculator = (d, a) => (Math.sqrt(a * d));
    const fuelCulculator = (d, a, m) => {
        return ((m * a * d / (2*c * c)) + Math.sqrt(a * d) * m / c);
    };
      // advanced mode 
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

```