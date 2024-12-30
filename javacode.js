import java.util.Scanner;

public class TemperatureConverter {

    public static double convertTemperature(double value, String from, String to) {
        if (from.equals(to)) return value;
        if (from.equals("C") && to.equals("F")) return (value * 9.0 / 5.0) + 32.0;
        if (from.equals("C") && to.equals("K")) return value + 273.15;
        if (from.equals("F") && to.equals("C")) return (value - 32.0) * 5.0 / 9.0;
        if (from.equals("F") && to.equals("K")) return (value - 32.0) * 5.0 / 9.0 + 273.15;
        if (from.equals("K") && to.equals("C")) return value - 273.15;
        if (from.equals("K") && to.equals("F")) return (value - 273.15) * 9.0 / 5.0 + 32.0;
        throw new IllegalArgumentException("Invalid conversion scales");
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Temperature Converter");
        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Celsius to Kelvin");
        System.out.println("3. Fahrenheit to Celsius");
        System.out.println("4. Fahrenheit to Kelvin");
        System.out.println("5. Kelvin to Celsius");
        System.out.println("6. Kelvin to Fahrenheit");

        System.out.print("Choose an option (1-6): ");
        int choice = scanner.nextInt();

        System.out.print("Enter the temperature to convert: ");
        double inputTemp = scanner.nextDouble();

        String from = null, to = null;
        switch (choice) {
            case 1: from = "C"; to = "F"; break;
            case 2: from = "C"; to = "K"; break;
            case 3: from = "F"; to = "C"; break;
            case 4: from = "F"; to = "K"; break;
            case 5: from = "K"; to = "C"; break;
            case 6: from = "K"; to = "F"; break;
            default: System.out.println("Invalid option. Please try again."); scanner.close(); return;
        }

        double resultTemp = convertTemperature(inputTemp, from, to);
        System.out.printf("%.10f %s = %.10f %s\n", inputTemp, from, resultTemp, to);

        scanner.close();
    }
}
