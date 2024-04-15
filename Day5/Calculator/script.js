function buttonclick(value) {
    document.getElementById("screen").value += value;
}

function clearDisplay() {
    document.getElementById("screen").value = "";
}

function equalClick() {
    var text = document.getElementById("screen").value;
    document.getElementById("screen").value = eval(text);
}