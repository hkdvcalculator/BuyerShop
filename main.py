def calculate_total_price(item_price, tax_rate, profit):
    # Convert tax rate from percentage to decimal
    tax_rate_decimal = tax_rate / 100

    # Calculate total coins to be received
    total_coins_received = item_price + profit

    # Calculate the new selling price that includes the tax
    total_price = round(total_coins_received / (1 - tax_rate_decimal))

    # Calculate total coins received after accounting for tax based on the new selling price
    total_coins_received_after_tax = round(total_price * (1 - tax_rate_decimal))

    return total_price, total_coins_received_after_tax

# Example usage
if __name__ == "__main__":
    item_price = float(input("Enter the item price (coins): "))
    tax_rate = float(input("Enter the tax rate (%): "))
    profit = float(input("Enter the desired profit (coins): "))

    # Calculate total price and total coins received after tax
    total_price, total_coins_received = calculate_total_price(item_price, tax_rate, profit)

    print(f"New price including tax and profit: {total_price} coins")
    print(f"Total coins that will appear in your gift box: {total_coins_received} coins")
