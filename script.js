function getValue(val) {
    document.getElementById('input').value += val;
}
function equal() {
    const a = document.getElementById('input');
    a.value = eval(a.value);
}
function clearAll() {
    document.getElementById('input').value = '';
}
function clearOne(inputID) {
    const inputField = document.getElementById(inputID);
    const currentValue = inputField.value;
    const newValue = currentValue.slice(0, -1);
    inputField.value = newValue;
}
