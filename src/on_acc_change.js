document.querySelector("input#acceleration").onkeyup = ()=>{
     const selectedModel = document.querySelector("select#model").value;
     const selectedAim = document.querySelector("select#aim").value;
     calculResult(selectedAim, selectedModel);
 
};
