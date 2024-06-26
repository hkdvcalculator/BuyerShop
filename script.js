document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.form-group input[type="number"]');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            this.style.width = (this.value.length + 1) * 8 + 'px';
        });
    });

    document.getElementById('calculatorForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var itemPrice = parseFloat(document.getElementById('item_price').value);
        var taxRate = parseFloat(document.getElementById('tax_rate').value);
        var profit = parseFloat(document.getElementById('profit').value);

        var taxRateDecimal = taxRate / 100;

        // Calculate total coins to be received
        var totalCoinsReceived = itemPrice + profit;

        // Calculate the new selling price that includes the tax
        var newSellingPrice = Math.ceil(totalCoinsReceived / (1 - taxRateDecimal));

        // Display result for new price including tax and profit
        document.getElementById('new-selling-price').textContent = newSellingPrice + " coins";

        // Calculate the total coins received after accounting for tax
        var totalCoinsAfterTax = Math.floor(newSellingPrice * (1 - taxRateDecimal));

        // Display result for total coins that will appear in your gift box
        document.getElementById('total-coins').
