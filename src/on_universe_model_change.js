// listen if there is any change in time units if user chose Einstein's Model
function listenChange() {
  const unitTimeDiv = document.querySelector("select#time-in-spaceship-units");
  let previousTimeInSpaceUnit = unitTimeDiv.value
  document.querySelector("select#time-in-spaceship-units").onchange = ({ currentTarget }) => {
    const time = document.querySelector("input#time-in-spaceship");
    handleChange(time, currentTarget.value, previousTimeInSpaceUnit, handleTimeUnitChange);
    previousTimeInSpaceUnit = currentTarget.value;
  }
}

document.querySelector("select#model").onchange = ({ currentTarget }) => {
  //exist in handle_view_change.js
  changeResultView(currentTarget);
  const aim = document.querySelector("select#aim").value;

  if (currentTarget.value == "newton" && aim == 'stop') {
    // results_calc_funcs.js
    calculateNewtonStop()

  } else if (currentTarget.value == "newton" && aim == "full-speed") {
    // results_calc_funcs.js
    calculateNewtonSpeed();

  } else if (currentTarget.value == "einstein" && aim == "full-speed") {
    // on top
    listenChange();
    // results_calc_funcs.js
    calculateEinsteinSpeed();
  } else if (currentTarget.value == "einstein" && aim == "stop") {
     // on top
    listenChange()
    // results_calc_funcs.js
    catculateEinsteinStop();
  }


}
