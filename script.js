
const ve = 3410

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

function getdeltaVtoLO() {
    if (document.getElementById("optionSelect").value === "custom") {
        const g = parseFloat(document.getElementById("customNumber1").value);
        const r = parseFloat(document.getElementById("customNumber2").value);
        v_o = Math.sqrt(g * r);
        g_loss= g * 140 // 140 seconds until orbit
        let g_steer_drag= 500;
        return v_o + g_loss + g_steer_drag;

    } else {
        switch (document.getElementById("optionSelect").value) {
            case "Earth":
                return 9400;
            case "Moon":
                return 1800;
            case "Mars":
            return 4200;
        case "Pluto":
            return 1000;
        case "Sun":
            return 500000;
        case "custom":
            return parseFloat(document.getElementById("customNumber1").value);
        default:
            return 0;
        }
    }
}

function calculateConst() {
    let power = getdeltaVtoLO() / ve;
    let result1 = Math.E ** power;
    let result2 = result1 - 1;
    return result2;
}

function calculateWeight() {
    let finalResult = 2 * document.getElementById("energyinput").value / (ve ** 2 * calculateConst());
    result.textContent = `Result: ${finalResult} kg`;
}
