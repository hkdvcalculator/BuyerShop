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

        // Convert tax rate from percentage to decimal
        var taxRateDecimal = taxRate / 100;

        // Calculate total coins received before tax
        var totalCoinsReceived = itemPrice + profit;

        // Calculate total price including tax
        var totalPrice = totalCoinsReceived / (1 - taxRateDecimal);

        // Round total price to the nearest integer
        var roundedTotalPrice = Math.round(totalPrice);

        // Calculate total coins received after tax based on the rounded total price
        var totalCoinsReceivedAfterTax = Math.round(roundedTotalPrice * (1 - taxRateDecimal));

        // Display result for new selling price including tax and profit
        document.getElementById('new-selling-price').textContent = roundedTotalPrice + " coins";

        // Display result for total coins that will appear in your gift box
        document.getElementById('total-coins').textContent = totalCoinsReceivedAfterTax + " coins";

        // Update history list
        var historyList = document.getElementById('historyList');
        var newHistoryItem = document.createElement('li');
        newHistoryItem.innerHTML = `Price: ${itemPrice}, Tax Rate: ${taxRate}%, Profit: ${profit} ⟶ New Price: ${roundedTotalPrice} coins, Gift Box Coins: ${totalCoinsReceivedAfterTax} coins<span class="decorative-text">⋅˚₊‧𐙚‧₊˚ ⋅</span>`;
        historyList.appendChild(newHistoryItem);
    });
});
