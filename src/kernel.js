
const manageResultAndView = (selectedAim, selectedModel, getDataAndUnities) => {
    const { a, m, d, AccUnit, MassUnit, DistUnit, timeUnit, veloUnit, 
    fuelUnit, maxKEUnit, fuelEnergyUnit }=getDataAndUnities();

    const A = a * handleAccUnitChange('m/s²', AccUnit);
    const M = m * handleMassUnitChange('kg', MassUnit);
    const D = d * handleDistUnitChange("m", DistUnit);
       
    if (selectedModel == "" || selectedAim =="") {
          return;
     }
     if (selectedAim == "stop" && selectedModel == "newton") {         
          const {T, V, F, KE, FE} = calculateNewtonStop(D, A, M);
          showResult(T, V, F, KE, FE);
     } else if (selectedAim == "full-speed" && selectedModel == "newton") {
          const {T, V, F, KE, FE} = calculateNewtonSpeed(D, A, M);
          showResult(T, V, F, KE, FE);
     } else if (selectedAim == "full-speed" && selectedModel == "einstein") {
          listenChange()
          const {T, t, V, F, KE, FE, beta, gamma} = calculateEinsteinSpeed(D, A, M);
          einsteinMode(t, beta, gamma);
          showResult(T, V, F, KE, FE);
     } else if (selectedAim == "stop" && selectedModel == "einstein") {
          listenChange()
          const {T, t, V, F, KE, FE, beta, gamma} = catculateEinsteinStop(D, A, M);
          einsteinMode(t, beta, gamma);
          showResult(T, V, F, KE, FE);
     }
    
    function showResult(T, V, F, KE, FE){
        document.querySelector("input#time").value = format(T * handleTimeUnitChange(timeUnit, 'sec'));
        document.querySelector("input#velocity").value = format(V * handleVelocityUnitChange(veloUnit, 'm/s'));
        document.querySelector("input#fuel").value = format(F * handleMassUnitChange(fuelUnit, 'kg'));
        document.querySelector("input#MKE").value=format(KE * handleEnergyUnit(maxKEUnit, 'j'));
        document.querySelector("input#FEK").value=format(FE *handleEnergyUnit(fuelEnergyUnit, 'j'));
    }

    function einsteinMode(t, beta, gamma) {
        const timeInSpaceshipUnit = document.querySelector("select#time-in-spaceship-units").value;
        document.querySelector("input#time-in-spaceship").value = format(t * handleTimeUnitChange(timeInSpaceshipUnit, 'sec'));
        document.querySelector("input#beta").value=format(beta);
        document.querySelector("input#gamma").value=format(gamma);
    } 
}
