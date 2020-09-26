let previousAccUnit = document.querySelector("select#acc-units").value
let previousMassUnit = document.querySelector("select#mass-units").value
let previousDistUnit = document.querySelector("select#dist-units").value
let previousTimeUnit = document.querySelector("select#time-units").value
let previousVeloUnit = document.querySelector("select#velocity-units").value
let previousFuelUnit = document.querySelector("select#fuel-units").value

const handleChange = (input, newUnit, previousUnit, handleUnit) => {
  if (input.value == '') {
    return;
  }
  if (newUnit == previousUnit) {
    return;
  }
  const factor = handleUnit(newUnit, previousUnit);
  console.log(factor, parseFloat(input.value))
  input.value = parseFloat(input.value) * factor;
}

document.querySelector("select#acc-units").onchange = ({ currentTarget }) => {
  const acc = document.querySelector("input#acceleration");
  // handleAccUnitChange : function exist in unit_convert_functs.js
  handleChange(acc, currentTarget.value, previousAccUnit, handleAccUnitChange);
  previousAccUnit = currentTarget.value;
}

document.querySelector("select#mass-units").onchange = ({ currentTarget }) => {
  const mass = document.querySelector("input#mass");
  handleChange(mass, currentTarget.value, previousMassUnit, handleMassUnitChange);
  previousMassUnit = currentTarget.value;
}

document.querySelector("select#dist-units").onchange = ({ currentTarget }) => {
  const dist = document.querySelector("input#distance");
  handleChange(dist, currentTarget.value, previousDistUnit, handleDistUnitChange);
  previousDistUnit = currentTarget.value;
}

document.querySelector("select#time-units").onchange = ({ currentTarget }) => {
  console.log("change")
  const time = document.querySelector("input#time");
  handleChange(time, currentTarget.value, previousTimeUnit, handleTimeUnitChange);
  previousTimeUnit = currentTarget.value;
}

document.querySelector("select#velocity-units").onchange = ({ currentTarget }) => {
  const velo = document.querySelector("input#velocity");
  handleChange(velo, currentTarget.value, previousVeloUnit, handleVelocityUnitChange);
  previousVeloUnit = currentTarget.value;
}

document.querySelector("select#fuel-units").onchange = ({ currentTarget }) => {
  const fuel = document.querySelector("input#fuel");
  handleChange(fuel, currentTarget.value, previousFuelUnit, handleMassUnitChange);
  previousFuelUnit = currentTarget.value;
}


