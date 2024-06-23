document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var itemPrice = parseFloat(document.getElementById('item_price').value);
    var taxRate = parseFloat(document.getElementById('tax_rate').value);
    var profit = parseFloat(document.getElementById('profit').value);

    // Perform calculation
    var taxRateDecimal = taxRate / 100;
    var totalPrice = Math.round(itemPrice * (1 + taxRateDecimal) + profit);

    // Display result
    document.getElementById('result').innerHTML = `<p style="color:#D998A7; background-color:#FFE6F1; font-weight:bold;">New price including tax and profit: ${totalPrice} coins</p>`;
});
