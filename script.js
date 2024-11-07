document.getElementById("convertButton").addEventListener("click", convert);

function convert() {
    let number = parseInt(document.getElementById("number").value);
    let binary = "";
    // let reminder = "";
    while (number > 0) {
        let reminder = number % 2;
        binary = reminder + binary;
        number = Math.floor(number / 2);
    }
    console.log(binary);
    document.getElementById("result").innerText = binary;
}
