
const const1 = 1.167 * 10 ** -8;
const const2 = 1.408 * 10 ** -7;

function energyfunc() {
  const value = document.getElementById('energy').value;
  document.getElementById("demo").innerHTML = "Energy is " + value + " Joules";
}

function handleToggle() {
    const isOn = document.getElementById('toggle').checked;
    document.getElementById('status').textContent = `straight up?: ${isOn}`;
    console.log(isOn);
}

 const textBox = document.getElementById('textBox');
  const output = document.getElementById('output');

  textBox.addEventListener('input', () => {
    output.textContent = `Energy: ${textBox.value}`;
  });

function calculate() {
    if (document.getElementById('toggle').checked) {
        const payload = const2 * energyinput.value;
        document.getElementById('result').textContent = `Result: ${payload} kg`;
    
    } else {
        const payload = const1 * energyinput.value;
        document.getElementById('result').textContent = `Result: ${payload} kg`;
    }
}
