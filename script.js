

function rollDice() {
    const numofdice = document.getElementById("numofdice").value; // Get the value of the input
    const diceresult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src = "images/${value}.jpeg" alt="Dice ${value}">`)
    
    }

    diceresult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

  
}
