let optionSelected = document.getElementById("option-selected");

document.querySelector("#my-select").addEventListener("change", function (e) {
    optionSelected.innerHTML = "Sie haben ausgewählt " + e.target.value
});