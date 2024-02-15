function calculateParallelogram() {
  const base = getInputValueById("parallelogram-base");
  const height = getInputValueById("parallelogram-height");
  const area = calculateArea(base, height);
  const setArea = document.getElementById("parallelogram-area");
  setArea.innerText = area;
}
function calculateArea(base, height) {
  const Area = base * height;
  return Area;
}
function getInputValueById(inputFieldId) {
  const input = document.getElementById(inputFieldId);
  const inputValueText = input.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}
