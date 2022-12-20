function playSound (audioSelector) {
    const element = document.querySelector(audioSelector);

    if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        alert('Element not found');
    }
}

const buttonList = document.querySelectorAll('.tecla');

for (let counter = 0; counter < buttonList.length; counter++) {

    const button = buttonList[counter];
    const instrument = button.classList[1]; 
    const idAudio = `#som_${instrument}`;

    button.onclick = function () {
        playSound(idAudio);
    };

    button.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            button.classList.add("ativa");
        }
    }

    button.onkeyup = function () {
        button.classList.remove("ativa");
    }

}