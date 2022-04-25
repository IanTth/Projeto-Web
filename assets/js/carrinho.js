//Passar string para numero
function moneyTextToFloat(text) {
    var cleanText = text.replace("R$ ", "").replace(",", ".");
    return parseFloat (cleanText);
}

//Passar número para string
function floatToMoneyText(value) {
    var text = (value < 1 ? "0": "") + Math.floor(value * 100);
    text = "R$" + text;
    return text. substr(0, text.length - 2) + "," + text.substr(-2);
}

//ler o total
function readTotal() {
    var total = document.getElementById("total");
    return moneyTextToFloat(total.innerHTML);
}
// rescrever o total
function writeTotal(value) {
    var total = document.getElementById("total");
    total.innerHTML = floatToMoneyText(value);
}
//função que calcula o total baseado no preço e na quantidade
function calculateTotalProducts() {
    var produtos = document.getElementsByClassName ("produto");
    var totalProdutos = 0;
        for (var pos = 0; pos < produtos.length; pos++) {
            var priceElements = produtos[pos].
            getElementsByClassName("preço");
            var priceText = priceElements[0].innerHTML;
            var price = moneyTextToFloat(priceText);
            var qtyElements = produtos[pos].
            getElementsByClassName("quantidade");
            var qtyText = qtyElements[0].value;
            var quantity = moneyTextToFloat(qtyText);
        var subtotal = quantity * price;
            totalProdutos += subtotal;
        }
        return totalProdutos;
    }

//função que altera a quantidade
function quantidadeMudou() {
    writeTotal(calculateTotalProducts());
}

function onDocumentLoad() {
    var textEdits = document.getElementsByClassName ("quantidade");
    for (var i = 0; i < textEdits.length; i++){
        textEdits[i].onchange = quantidadeMudou;
    }
}

window.onload = onDocumentLoad;
