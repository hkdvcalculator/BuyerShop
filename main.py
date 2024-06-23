def calculate_total_price(item_price, tax_rate, profit):
    # Convert tax rate from percentage to decimal
    tax_rate_decimal = tax_rate / 100

    # Calculate total price including tax and profit
    total_price = round(item_price * (1 + tax_rate_decimal) + profit)
    return total_price
