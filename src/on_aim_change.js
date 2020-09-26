document.querySelector("select#aim").onchange = ({ currentTarget }) => {
     const selectedModel = document.querySelector("select#model").value;

     if (currentTarget.value == "" || selectedModel == "") {
          return;
     }
     const { value } = currentTarget;

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