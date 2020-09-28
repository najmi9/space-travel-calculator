# space-travel-calculator
# Imad Najmi
___

contact me  : imadnajmi9@gmail.com

#Used Equations

```javascript
    // Newton's Model, Arrived and Stop
    const timeCulculator = (d, a) => (2*Math.sqrt(d/a));
    const veloCulculator = (d, a) => (Math.sqrt(a * d));
    const fuelCulculator = (d, a, m) =>((m * a * d / (2*c * c)) + Math.sqrt(a * d) * m / c);
    // advanced mode 
    const maxKE =  (d, a, m) =>  {
        const v = veloCulculator(d, a);
        return (m * v * v / 2);
    };
    const fuelEE = (d, a, m) =>{
        const fuel = fuelCulculator(d, a, m);
        return fuel * c * c;
    }
  // Newton's Model Arrived at full speed
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
   // Einstein's Model Arrived at full speed
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
    
    // Einstein's Model Arrived and Stop
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

```
