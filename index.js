const aInput = document.getElementById('a');
const bInput = document.getElementById('b');
const cInput = document.getElementById('c');

const calcBtn = document.getElementById('calculate');
const resultText = document.getElementById('result-text');

var graphEl = document.getElementById('graph');

function GetY(x, a, b, c) {
    return a*x**2 + b*x + c;
}

function GetXInt(a, b, c) {
    const sqr = Math.sqrt(b**2 - 4*a*c);
    let positive = (-b + sqr)/(2*a);
    let negative = (-b - sqr)/(2*a);
    
    return {positive, negative};
}

calcBtn.addEventListener('click', () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    const c = Number(cInput.value);
    const Vx = -b/(2*a);
    const Vy = GetY(Vx, a, b, c);
    const AOS = Vx;
    const yInt = GetY(0, a, b, c);
    const nextPoint = GetY(Vx + 1, a, b, c);
    const pointAfter = GetY(Vx + 2, a, b, c);
    const xInt = GetXInt(a, b, c);
    resultText.textContent = `Vx: ${Vx}\nVy: ${Vy}\nAOS: x=${AOS}\ny-int: (0, ${yInt})\nNext Point: (${Vx + 1}, ${nextPoint}), (${Vx - 1}, ${nextPoint})\nFinal Point: (${Vx + 2}, ${pointAfter}), (${Vx - 2}, ${pointAfter})\nX-Ints: X = ${xInt["positive"]} or X = ${xInt["negative"]}`;
    graphEl.innerHTML = ``;
    var calculator = Desmos.GraphingCalculator(graphEl);
    calculator.setExpression({id:'blud', latex:`${a}x^2 + ${b}x + ${c}`});
});