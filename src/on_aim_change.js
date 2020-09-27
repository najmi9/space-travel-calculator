document.querySelector("select#aim").onchange = ({ currentTarget }) => {
     const selectedModel = document.querySelector("select#model").value;
     const advancedMode =  document.querySelector("input#mode").checked;
     
     if (currentTarget.value == "" || selectedModel == "") {
          return;
     }
     const { value } = currentTarget;

     if (value == "stop" && selectedModel == "newton") {
          // results_calc_funcs.js
          calculateNewtonStop(advancedMode);

     } else if (value == "full-speed" && selectedModel == "newton") {
          // results_calc_funcs.js
          calculateNewtonSpeed(advancedMode);

     } else if (value == "full-speed" && selectedModel == "einstein") {
          //on_universe_change_model.js
          listenChange()
          // results_calc_funcs.js
          calculateEinsteinSpeed(advancedMode);

     } else if (value == "stop" && selectedModel == "einstein") {
          //on_universe_change_model.js
          listenChange()
          // results_calc_funcs.js
          catculateEinsteinStop(advancedMode);
     }
}