let beans = 0;
let bps = 0;

const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const beansDisplay = document.getElementById('beans');
const bpsDisplay = document.getElementById('bps');

clickButton.addEventListener('click', () => {
    beans++;
    updateDisplay();
});

upgradeButton.addEventListener('click', () => {
    if (beans >= 10) {
        beans -= 10;
        bps++;
        updateDisplay();
    } else {
        alert("Not enough beans to upgrade BPS!");
    }
});

function updateDisplay() {
    beansDisplay.textContent = beans;
    bpsDisplay.textContent = bps;
}

setInterval(() => {
    beans += bps;
    updateDisplay();
}, 1000);
