import java.util.Scanner;

public class W06_P4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read two integers
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();

        // try-catch-finally structure
        try {
System.out.println("Result is: " + (num1 / num2)); // Perform division inside try block

/*
Explanation:
- If division is successful, result is printed
- If division by zero occurs, catch block shows error
- finally block prints "Program Ended" every time, showing reliable code execution
*/
} catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } finally {
            // Print final message, runs always
            System.out.println("Program Ended");
        }

        sc.close();
    }
}