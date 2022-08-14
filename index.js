//MAQUETACIÖN DE CALCULADORA DE PORCENTAJE PESO ENTRE PESO

const containerPPP = document.querySelector('.WWP');

function renderCalcPPP() {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("calculadoraPP");

    const title = document.createElement("h2");
    title.innerText = "Calculator\n% weight/weight";
        
    const form = document.createElement("form");

    const label1 = document.createElement("label");
    label1.innerText = 'Mass of solute (grams)';
    const input1 = document.createElement('input');
    input1.classList.add('sto');
    input1.setAttribute('type','number');

    const label2 = document.createElement("label");
    label2.innerText = 'Mass of solvent (grams)';
    const input2 = document.createElement('input');
    input2.classList.add('solvente');
    input2.setAttribute('type','number');

    const label3 = document.createElement("label");
    label3.innerText = 'Mass of solution (grams)';
    const input3 = document.createElement('input');
    input3.classList.add('solucion');
    input3.setAttribute('type','number');

    const label4 = document.createElement("label");
    label4.innerText = '%w/w solute';
    const input4 = document.createElement('input');
    input4.classList.add('porcentajeSoluto');
    input4.setAttribute('type','number');

    const label5 = document.createElement("label");
    label5.innerText = '%w/w solvent';
    const input5 = document.createElement('input');
    input5.classList.add('porcentajeSolvente');
    input5.setAttribute('type','number');    

    const btnContainer = document.createElement('div');
    btnContainer.classList.add("btncontainer");

    const btnCalc = document.createElement('button');
    btnCalc.innerText = 'Calculate';
    btnCalc.classList.add('calcular');
    btnCalc.setAttribute('type', 'button');

    const btnClear = document.createElement('button');
    btnClear.innerText = 'Clear';
    btnClear.classList.add('clear');
    btnClear.setAttribute('type', 'button');

    btnContainer.append(btnCalc, btnClear);
    form.append(label1, input1, label2, input2, label3, input3, label4, input4, label5, input5, btnContainer);
    mainContainer.append(title, form);

    containerPPP.appendChild(mainContainer);
}

renderCalcPPP()