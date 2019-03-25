/*
# ========================================================
# = Initialization
# ========================================================
*/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

window.onload = init;

function setStartingImages() {
    const START_DIRECTORY = './images/start'
    const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/d6.png`;

    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.src = SIX_SIDED_START_IMAGE;

    const doubleD12Roll1 = document.querySelector('#double-d6-roll-1')
    const doubleD12Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD12Roll1.src = SIX_SIDED_START_IMAGE;
    doubleD12Roll2.src = SIX_SIDED_START_IMAGE;

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.src = `${START_DIRECTORY}/d12.jpeg`;
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.src = `${START_DIRECTORY}/d20.jpg`;
}

function init() {
    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.addEventListener('click', rollD6);

    const doubleD6Roll1 = document.querySelector('#double-d6-roll-1');
    doubleD6Roll1.addEventListener('click', rollDoubleD6);
    const doubleD6Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD6Roll2.addEventListener('click', rollDoubleD6);

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.addEventListener('click', rollD12);
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.addEventListener('click', rollD20);

    const resetButton = document.querySelector('#reset-button')
    resetButton.addEventListener('click', resetAllRolls);

    setStartingImages();
}


/*
# ========================================================
# = Roll Functions
# ========================================================
*/
function rollD6(){
    let result = Math.floor(Math.random() * 6) + 1;
    sixes.push(result);

    const d6Mean = document.querySelector('#d6-rolls-mean')
    d6Mean.innerText = meanAverage(sixes);

    const d6Median = document.querySelector('#d6-rolls-median')
    d6Median.innerText = medianAverage(sixes);

    const d6Roll = document.querySelector('#d6-roll');
    const d6path = './images/d6';

    switch(result){
        case 1: d6Roll.src = `${d6path}/1.png`;
        break;

        case 2: d6Roll.src = `${d6path}/2.png`;
        break;

        case 3: d6Roll.src = `${d6path}/3.png`;
        break;

        case 4: d6Roll.src = `${d6path}/4.png`;
        break;

        case 5: d6Roll.src = `${d6path}/5.png`;
        break;

        case 6: d6Roll.src = `${d6path}/6.png`;
        break;

        default: d6Roll.src = './images/start/d6.png'
    }
}

function rollDoubleD6(){
    let result1 = Math.floor(Math.random() * 6) + 1;
    let result2 = Math.floor(Math.random() * 6) + 1;
    doubleSixes.push(result1 + result2);

    const double6Mean = document.querySelector('#double-d6-rolls-mean');
    double6Mean.innerText = meanAverage(doubleSixes);

    const double6Median = document.querySelector('#double-d6-rolls-median');
    double6Median.innerText = medianAverage(doubleSixes);

    const double6Roll1 = document.querySelector('#double-d6-roll-1');
    const double6Roll2 = document.querySelector('#double-d6-roll-2');
    const double6path = './images/d6';

    switch(result1){
        case 1: double6Roll1.src = `${double6path}/1.png`;
        break;

        case 2: double6Roll1.src = `${double6path}/2.png`;
        break;

        case 3: double6Roll1.src = `${double6path}/3.png`;
        break;

        case 4: double6Roll1.src = `${double6path}/4.png`;
        break;

        case 5: double6Roll1.src = `${double6path}/5.png`;
        break;

        case 6: double6Roll1.src = `${double6path}/6.png`;
        break;

        default: double6Roll1.src = './images/start/d6.png'
    }

    switch(result2){
        case 1: double6Roll2.src = `${double6path}/1.png`;
        break;

        case 2: double6Roll2.src = `${double6path}/2.png`;
        break;

        case 3: double6Roll2.src = `${double6path}/3.png`;
        break;

        case 4: double6Roll2.src = `${double6path}/4.png`;
        break;

        case 5: double6Roll2.src = `${double6path}/5.png`;
        break;

        case 6: double6Roll2.src = `${double6path}/6.png`;
        break;

        default: double6Roll1.src = './images/start/d6.png'
        double6Roll1.src = './images/start/d6.png';
    }
}

function rollD12(){
    let result = Math.floor(Math.random() * 12) + 1;
    twelves.push(result);

    const d12Mean = document.querySelector('#d12-rolls-mean');
    d12Mean.innerText = meanAverage(twelves);

    const d12Median = document.querySelector('#d12-rolls-median');
    d12Median.innerText = medianAverage(twelves);

    const d12Roll = document.querySelector('#d12-roll');
    const d12path = './images/numbers';

    switch(result){
        case 1: d12Roll.src = `${d12path}/1.png`;
        break;

        case 2: d12Roll.src = `${d12path}/2.png`;
        break;

        case 3: d12Roll.src = `${d12path}/3.png`;
        break;

        case 4: d12Roll.src = `${d12path}/4.png`;
        break;

        case 5: d12Roll.src = `${d12path}/5.png`;
        break;

        case 6: d12Roll.src = `${d12path}/6.png`;
        break;

        case 7: d12Roll.src = `${d12path}/7.png`;
        break;

        case 8: d12Roll.src = `${d12path}/8.png`;
        break;

        case 9: d12Roll.src = `${d12path}/9.png`;
        break;

        case 10: d12Roll.src = `${d12path}/10.png`;
        break;

        case 11: d12Roll.src = `${d12path}/11.png`;
        break;

        case 12: d12Roll.src = `${d12path}/12.png`;
        break;

        default: d12Roll.src = './images/start/d12.png'
    }
}

function rollD20(){
    let result = Math.floor(Math.random() * 20) + 1;
    twenties.push(result);

    const d20Mean = document.querySelector('#d20-rolls-mean');
    d20Mean.innerText = meanAverage(twenties);

    const d20Median = document.querySelector('#d20-rolls-median');
    d20Median.innerText = medianAverage(twenties);

    const d20Roll = document.querySelector('#d20-roll');
    const d20path = './images/numbers';

    switch(result){
        case 1: d20Roll.src = `${d20path}/1.png`;
        break;

        case 2: d20Roll.src = `${d20path}/2.png`;
        break;

        case 3: d20Roll.src = `${d20path}/3.png`;
        break;

        case 4: d20Roll.src = `${d20path}/4.png`;
        break;

        case 5: d20Roll.src = `${d20path}/5.png`;
        break;

        case 6: d20Roll.src = `${d20path}/6.png`;
        break;

        case 7: d20Roll.src = `${d20path}/7.png`;
        break;

        case 8: d20Roll.src = `${d20path}/8.png`;
        break;

        case 9: d20Roll.src = `${d20path}/9.png`;
        break;

        case 10: d20Roll.src = `${d20path}/10.png`;
        break;

        case 11: d20Roll.src = `${d20path}/11.png`;
        break;

        case 12: d20Roll.src = `${d20path}/6.png`;
        break;

        case 13: d20Roll.src = `${d20path}/6.png`;
        break;

        case 14: d20Roll.src = `${d20path}/6.png`;
        break;

        case 15: d20Roll.src = `${d20path}/6.png`;
        break;

        case 16: d20Roll.src = `${d20path}/6.png`;
        break;

        case 17: d20Roll.src = `${d20path}/6.png`;
        break;

        case 18: d20Roll.src = `${d20path}/6.png`;
        break;

        case 19: d20Roll.src = `${d20path}/6.png`;
        break;

        case 20: d20Roll.src = `${d20path}/6.png`;
        break;

        default: d20Roll.src = './images/start/d20.png'
    }
}

function resetAllRolls(){
    setStartingImages();

    document.querySelector('#d6-rolls-mean').innerText = '';
    document.querySelector('#d6-rolls-median').innerText = '';

    document.querySelector('#double-d6-rolls-mean').innerText = '';
    document.querySelector('#double-d6-rolls-median').innerText = '';

    document.querySelector('#d12-rolls-mean').innerText = '';
    document.querySelector('#d12-rolls-median').innerText = '';

    document.querySelector('#d20-rolls-mean').innerText = '';
    document.querySelector('#d20-rolls-median').innerText = '';

    while(sixes.length > 0){
        sixes.pop();
    }

    while(doubleSixes.length > 0){
        doubleSixes.pop();
    }

    while(twelves.length > 0){
        twelves.pop();
    }

    while(twenties.length > 0){
        twenties.pop();
    }

}
/*
# ========================================================
# = Math Functions
# ========================================================
*/
    function meanAverage(rollArr){
        let result = 0;

        for(let i = 0; i < rollArr.length; i++){
            result += rollArr[i];
        }

        return Math.floor(result / rollArr.length);
    }

    function medianAverage(rollArr){
        rollArr.sort(function(a, b){return a -b});

        return rollArr[Math.floor(rollArr.length / 2)];
    }

/*
# ========================================================
# = Helper Functions - Stretch Goals!
# ========================================================
*/

