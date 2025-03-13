
const messages = [
    "dai bro :(",
    "ahem sicura??",
    "dai che roadblocks forse",
    "ma ma ma...",
    "ermm ti do un centesimo!",
    "se se dici di no saro muy emo",
    "ma muy muy emo..",
    "ma proprio muy muy muy emo..",
    "vabbe nvm :(",
    "nvm my ass! pls????"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}