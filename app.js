const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

const buttons = document.querySelectorAll('a')
let colors = [];
let i = 0;
for (let button of buttons) {
    button.classList.remove('btn-primary');
    button.style.backgroundColor = random_hex_color_code();
    colors[i] = button.style.backgroundColor;
    i++;
}
let winnerButton = buttons[Math.floor(Math.random() * 6)];
let winnerRGB = winnerButton.style.backgroundColor
winnerRGB = winnerRGB.split("(")[1].split(")")[0];
winnerRGB = winnerRGB.split(",");
var winnerHex = winnerRGB.map(function (x) {
    x = parseInt(x).toString(16);
    return (x.length == 1) ? "0" + x : x;
})
winnerHex = winnerHex.join("");

let answerDisplay = document.querySelector('h3');
answerDisplay.innerHTML = `#${winnerHex}`;

for (let button of buttons) {
    button.addEventListener('click', () => {
        if (button == winnerButton) {
            alert('Right!');
            location.reload();
        } else button.remove();
    })
}

