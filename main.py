def calculate_total_price(item_price, tax_rate, profit):
    # Convert tax rate from percentage to decimal
    tax_rate_decimal = tax_rate / 100

    # Calculate total price including tax and profit
    total_price = round(item_price * (1 + tax_rate_decimal) + profit)

    # Calculate total coins received after tax
    total_coins_received = round(item_price - (item_price * tax_rate_decimal))

    return total_price, total_coins_received

# Example usage
if __name__ == "__main__":
    item_price = float(input("Enter the item price (coins): "))
    tax_rate = float(input("Enter the tax rate (%): "))
    profit = float(input("Enter the desired profit (coins): "))

    # Calculate total price and total coins received after tax
    total_price, total_coins_received = calculate_total_price(item_price, tax_rate, profit)

    print(f"New price including tax and profit: {total_price} coins")
    print(f"Total coins that will appear in your gift box: {total_coins_received} coins")
