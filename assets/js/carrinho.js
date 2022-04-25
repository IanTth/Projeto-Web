/Passar string para numero
function moneyTextToFloat(text) {
var cleanText =
return parseFloat (cleanText);
text.replace("R$ ", "").replace(",", ".");
//Passar número para string
function floatToMoneyText(value) {
(value < 1 ? "0": "") + Math.floor(value
var text =
text = "R$" + text;
return text. substr(0, text.length
100);
2) + "," + text.substr(-2);
//ler o total
function readTotal() {
document.getElementById("total");
return moneyTextToFloat(total.innerHTML);
var total
Wescrever o total
function writeTotal(value) {
var total
total.innerHTML =
document.getElementById("total");
float ToMoneyText(value);
//função que calcula o total baseado no preço e na quantidade
function calculateTotalProducts() {
var produtos
var totalProdutos = 0;
= document.getElementsByClassName ("produto");
for (var pos
var priceElements = produtos[pos].
getElementsByClassName("price");
var priceText
var price = moneyText ToFloat(priceText);
var qtyElements
getElementsByClassName("quantity");
var qtyText =
var quantity = moneyTextToFloat(qtyText);
var subtotal
totalProdutos += subtotal;
0; pos < produtos.length; pos++) {
priceElements[0].innerHTML;
produtos[pos].
qtyElements[0].value;
quantity price;
W.
return totalProdutos;
//função que altera a quantidade
function quantidadeMudou() {
writeTotal(calculateTotalProducts());
function onDocument Load() {
var textEdits
document.getElementsByClassName ("quantity");
for (var i = 0; i < textEdits.length; i++){
textEdits[i].onchange = quantidadeMudou;
%3D
window.onload = onDocumentLoad;