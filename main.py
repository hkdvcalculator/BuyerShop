def calculate_total_price(item_price, tax_rate, profit):
    # Convert tax rate from percentage to decimal
    tax_rate_decimal = tax_rate / 100

    # Calculate total coins to be received
    total_coins_received = item_price + profit

    # Calculate the new selling price that includes the tax
    total_price = total_coins_received / (1 - tax_rate_decimal)

    # Round total_price to the nearest integer
    total_price_rounded = round(total_price)

    # Calculate total coins received after accounting for tax based on the rounded new selling price
    total_coins_received_after_tax = round(total_price_rounded * (1 - tax_rate_decimal))

    return total_price_rounded, total_coins_received_after_tax

# Example usage
item_price = 950
tax_rate = 27
profit = 182

# Calculate total price and total coins received after tax
total_price, total_coins_received = calculate_total_price(item_price, tax_rate, profit)

print(f"New price including tax and profit: {total_price} coins")
print(f"Total coins that will appear in your gift box: {total_coins_received} coins")
