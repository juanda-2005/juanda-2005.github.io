function updateColor() {
    const red = document.getElementById("red").value;
    const green = document.getElementById("green").value;
    const blue = document.getElementById("blue").value;

    document.getElementById("redValue").textContent = red;
    document.getElementById("greenValue").textContent = green;
    document.getElementById("blueValue").textContent = blue;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
