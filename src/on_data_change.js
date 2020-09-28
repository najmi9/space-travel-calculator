
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

function calculResult(value, selectedModel) {
     if (selectedModel == "" || value == "") {
          return;
     }
     if (value == "stop" && selectedModel == "newton") {
          // results_calc_funcs.js
          calculateNewtonStop();
     } else if (value == "full-speed" && selectedModel == "newton") {
          // results_calc_funcs.js
          calculateNewtonSpeed();
     } else if (value == "full-speed" && selectedModel == "einstein") {
          //on_universe_change_model.js
          listenChange()
          // results_calc_funcs.js
          calculateEinsteinSpeed();
     } else if (value == "stop" && selectedModel == "einstein") {
          //on_universe_change_model.js
          listenChange()
          // results_calc_funcs.js
          catculateEinsteinStop();
     }
}
document.querySelector("input#distance").onkeyup = () => {
     const selectedModel = document.querySelector("select#model").value;
     const selectedAim = document.querySelector("select#aim").value;
     calculResult(selectedAim, selectedModel);
};

document.querySelector("select#aim").onchange = ({ currentTarget }) => {
     const selectedModel = document.querySelector("select#model").value;
     calculResult(currentTarget.value, selectedModel);
}

document.querySelector("input#acceleration").onkeyup = () => {
     const selectedModel = document.querySelector("select#model").value;
     const selectedAim = document.querySelector("select#aim").value;
     calculResult(selectedAim, selectedModel);
};

document.querySelector("select#model").onchange = ({ currentTarget }) => {
     const advancedMode = document.querySelector("input#mode").checked;
     //exist in handle_advanced_mode_view.js
     handleAdvancedView(advancedMode, currentTarget.value);
     //exist in handle_view_change.js
     changeResultView(currentTarget);
     const aim = document.querySelector("select#aim").value;
     calculResult(aim, currentTarget.value);
}

