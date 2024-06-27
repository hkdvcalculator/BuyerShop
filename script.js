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

        // Perform calculation for new price including tax and profit
        var taxRateDecimal = taxRate / 100;
        var totalPrice = Math.ceil((itemPrice + profit) / (1 - taxRateDecimal));

        // Display result for new price including tax and profit
        document.querySelector('#result .output-number').textContent = totalPrice + " coins";

        // Calculate total coins received after accounting for tax based on the new price
        var totalCoinsReceived = Math.ceil(totalPrice - (totalPrice * taxRateDecimal));

        // Display result for total coins that will appear in your gift box
        var totalCoinsDisplay = totalCoinsReceived + " coins";
        document.getElementById('total-coins').textContent = totalCoinsDisplay;

        // Update history list
        var historyList = document.getElementById('historyList');
        var newHistoryItem = document.createElement('li');
        newHistoryItem.innerHTML = `Price: ${itemPrice}, Tax Rate: ${taxRate}%, Profit: ${profit} ⟶ New Price: ${totalPrice} coins, Gift Box Coins: ${totalCoinsReceived} coins<span class="decorative-text">⋅˚₊‧𐙚‧₊˚ ⋅</span>`;
        historyList.appendChild(newHistoryItem);
    });
});
