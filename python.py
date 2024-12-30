def convert_temperature(value, from_scale, to_scale):
    if from_scale == to_scale:
        return value
    if from_scale == "C" and to_scale == "F":
        return (value * 9.0 / 5.0) + 32.0
    if from_scale == "C" and to_scale == "K":
        return value + 273.15
    if from_scale == "F" and to_scale == "C":
        return (value - 32.0) * 5.0 / 9.0
    if from_scale == "F" and to_scale == "K":
        return (value - 32.0) * 5.0 / 9.0 + 273.15
    if from_scale == "K" and to_scale == "C":
        return value - 273.15
    if from_scale == "K" and to_scale == "F":
        return (value - 273.15) * 9.0 / 5.0 + 32.0
    raise ValueError("Invalid conversion scales")

def main():
    print("Temperature Converter")
    print("1. Celsius to Fahrenheit")
    print("2. Celsius to Kelvin")
    print("3. Fahrenheit to Celsius")
    print("4. Fahrenheit to Kelvin")
    print("5. Kelvin to Celsius")
    print("6. Kelvin to Fahrenheit")

    choice = int(input("Choose an option (1-6): "))
    input_temp = float(input("Enter the temperature to convert: "))

    from_scale, to_scale = None, None
    if choice == 1:
        from_scale, to_scale = "C", "F"
    elif choice == 2:
        from_scale, to_scale = "C", "K"
    elif choice == 3:
        from_scale, to_scale = "F", "C"
    elif choice == 4:
        from_scale, to_scale = "F", "K"
    elif choice == 5:
        from_scale, to_scale = "K", "C"
    elif choice == 6:
        from_scale, to_scale = "K", "F"
    else:
        print("Invalid option. Please try again.")
        return

    result_temp = convert_temperature(input_temp, from_scale, to_scale)
    print(f"{input_temp:.2f} {from_scale} = {result_temp:.2f} {to_scale}")

if __name__ == "__main__":
    main()
