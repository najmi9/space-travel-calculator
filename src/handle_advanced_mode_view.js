const advancedHtml = document.querySelector("div.advanced-mode");
const model = document.querySelector("select#model");
const advanceEinstein = document.querySelector("div#advanced-einstein-mode");

advancedHtml.style.display = 'none';
advanceEinstein.style.display = 'none';

function handleAdvancedView(checked, selectedMode) {
	if (!checked) {
		advancedHtml.style.display = 'none';
		advanceEinstein.style.display = 'none';
	}
	if (checked && selectedMode == "einstein") {
		advancedHtml.style.display = 'block';
		advanceEinstein.style.display = 'block';
	} else if (checked && selectedMode == "newton") {
		advancedHtml.style.display = 'block';
		advanceEinstein.style.display = 'none';
	}
}

document.querySelector("input#mode").onchange = ({ currentTarget }) => {

	handleAdvancedView(currentTarget.checked, model.value);
}
