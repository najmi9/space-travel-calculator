// get take a distance as props and print it with the choosen unit
const handleTargetChange = (value) => {
	const inputDist = document.querySelector("input#distance");
	const distUnit = document.querySelector("select#dist-units").value;
	const factor = handleDistUnitChange(distUnit, 'm');
    inputDist.value =format(factor * parseInt(value));
}

const dest = document.getElementById('destination');
const element = document.getElementById('stars-or-exoplanets');

dest.onchange = ({ currentTarget }) => {
	if (currentTarget.value == "") {
		return;
	}
	const select = document.createElement('select');
	select.setAttribute("class", "custom-select");

	const selectStar = document.querySelector("select#stars");
	const selectExo = document.querySelector("select#exoplanets");
	const selectPlnt = document.querySelector("select#planets"); 

	if (currentTarget.value == "Exoplanet") {
		if (selectExo) {
			return;
		}
		if (selectStar) { element.removeChild(selectStar); }
		if (selectPlnt) { element.removeChild(selectPlnt); }
		exoplanets.forEach((ele) => {
			let newOption = new Option(ele.exoplanet, ele.distance);
			select.setAttribute("id", "exoplanets")
			select.appendChild(newOption)
		});

		select.onchange = ({ currentTarget }) => {
			handleTargetChange(currentTarget.value);
			const selectedModel = document.querySelector("select#model").value;
            const selectedAim = document.querySelector("select#aim").value;
            manageResultAndView(selectedAim, selectedModel, getDataAndUnits);
		}
	} else if (currentTarget.value == "Star Or Galaxy") {
		if (selectStar) {
			return;
		}
		if (selectExo) { element.removeChild(selectExo); }
		if (selectPlnt) { element.removeChild(selectPlnt); }
		starsGlaxies.forEach(ele => {
			let newOption = new Option(ele.star, ele.distance);
			select.setAttribute("id", "stars");
			select.appendChild(newOption);
		});

		select.onchange = ({ currentTarget }) => {
			handleTargetChange(currentTarget.value);
			const selectedModel = document.querySelector("select#model").value;
            const selectedAim = document.querySelector("select#aim").value;
            manageResultAndView(selectedAim, selectedModel, getDataAndUnits);
		}
	}else if (currentTarget.value == "Planet Or Dwarf") {
		if (selectPlnt) {
			return;
		}
		if (selectExo) { element.removeChild(selectExo); }
		if (selectStar) { element.removeChild(selectStar); }
		PlantesOrDwarf.forEach(ele => {
			let newOption = new Option(ele.planet, ele.distance);
			select.setAttribute("id", "planets");
			select.appendChild(newOption);
		});

		select.onchange = ({ currentTarget }) => {
			handleTargetChange(currentTarget.value);
			const selectedModel = document.querySelector("select#model").value;
            const selectedAim = document.querySelector("select#aim").value;
            manageResultAndView(selectedAim, selectedModel, getDataAndUnits);
		}
	}
	element.setAttribute("class", "form-group");
	element.appendChild(select);
}

// change the result view according to the model, if it's for
// Einstein or Newton
const changeResultView = (currentTarget) => {
	if (currentTarget.vlaue == "") {
		return;
	}
	if (currentTarget.value == "einstein") {
		if (document.querySelector("input#time-in-spaceship")) {
			return;
		}
		const div = document.querySelector("div.js-time");
		div.firstElementChild.innerHTML = "Time passed in Earth"
		div.children[1].firstElementChild.setAttribute("placeholder", "time passed in earth")
		div.children[1].firstElementChild.setAttribute("data-title", "Time passed in the resting frame or refrence, it could be an observer on Earth.")
		const cln = div.cloneNode(true);

		cln.firstElementChild.innerHTML = "Time passed in spaceship"
		cln.children[1].firstElementChild.setAttribute("id", "time-in-spaceship")
		cln.children[1].firstElementChild.setAttribute("placeholder", "Time passed in spaceship")
		cln.children[2].firstElementChild.setAttribute("id", "time-in-spaceship-units")
		div.parentNode.insertBefore(cln, div)
	} else {
		if (document.querySelector("input#time-in-spaceship")) {
			document.querySelector("input#time-in-spaceship").parentElement.parentElement.remove()
			const div = document.querySelector("div.js-time");
			div.firstElementChild.innerHTML = "Time passed "
			div.children[1].firstElementChild.setAttribute("placeholder", "Time passed ")
		}
	}
}

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

