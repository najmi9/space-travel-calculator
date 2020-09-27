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

	if (currentTarget.value == "Exoplanet") {
		if (selectExo) {
			return;
		}
		if (selectStar) {
			element.removeChild(selectStar)
		}
		exoplanets.forEach((ele) => {
			let newOption = new Option(ele.exoplanet, ele.distance);
			select.setAttribute("id", "exoplanets")
			select.appendChild(newOption)
		});

		select.onchange = ({ currentTarget }) => {
			handleTargetChange(currentTarget.value);
			const selectedModel = document.querySelector("select#model").value;
            const selectedAim = document.querySelector("select#aim").value;
            calculResult(selectedAim, selectedModel);
		}
	} else if (currentTarget.value == "Star Or Galaxy") {
		if (selectStar) {
			return;
		}
		if (selectExo) {
			element.removeChild(selectExo)
		}
		starsGlaxies.forEach(ele => {
			let newOption = new Option(ele.star, ele.distance);
			select.setAttribute("id", "stars");
			select.appendChild(newOption);
		});

		select.onchange = ({ currentTarget }) => {
			handleTargetChange(currentTarget.value);
			const selectedModel = document.querySelector("select#model").value;
            const selectedAim = document.querySelector("select#aim").value;
            calculResult(selectedAim, selectedModel);
		}
	}
	element.setAttribute("class", "form-group");
	element.appendChild(select);
}

// change the result view according to the model, if ti's for
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
		div.firstElementChild.firstElementChild.innerHTML = "Time passed in Earth"
		div.firstElementChild.lastElementChild.setAttribute("placeholder", "time passed in earth")
		const cln = div.cloneNode(true);
		cln.firstElementChild.firstElementChild.innerHTML = "Time passed in spaceship"
		cln.firstElementChild.lastElementChild.setAttribute("id", "time-in-spaceship")
		cln.firstElementChild.lastElementChild.setAttribute("placeholder", "Time passed in spaceship")
		cln.lastElementChild.firstElementChild.setAttribute("id", "time-in-spaceship-units")
		div.parentNode.insertBefore(cln, div)
	} else {
		if (document.querySelector("input#time-in-spaceship")) {
			document.querySelector("input#time-in-spaceship").parentElement.parentElement.remove()
			const div = document.querySelector("div.js-time");
			div.firstElementChild.firstElementChild.innerHTML = "Time passed "
			div.firstElementChild.lastElementChild.setAttribute("placeholder", "Time passed ")
		}
	}
}

