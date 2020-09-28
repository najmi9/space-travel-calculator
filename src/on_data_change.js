document.querySelector("input#distance").onkeyup = ()=>{
    const selectedModel = document.querySelector("select#model").value;
    const selectedAim = document.querySelector("select#aim").value;
    manageResultAndView(selectedAim, selectedModel, getDataAndUnits);
};

document.querySelector("select#aim").onchange = ({ currentTarget }) => {
    const selectedModel = document.querySelector("select#model").value;
    manageResultAndView(currentTarget.value, selectedModel, getDataAndUnits);
}

document.querySelector("input#acceleration").onkeyup = ()=>{
    const selectedModel = document.querySelector("select#model").value;
    const selectedAim = document.querySelector("select#aim").value;
    manageResultAndView(selectedAim, selectedModel, getDataAndUnits);
};

document.querySelector("select#model").onchange = ({ currentTarget }) => {
  const advancedMode =  document.querySelector("input#mode").checked;
  handleAdvancedView(advancedMode, currentTarget.value);
  changeResultView(currentTarget);
  const selectedAim = document.querySelector("select#aim").value;
  manageResultAndView(selectedAim, currentTarget.value, getDataAndUnits);
}

