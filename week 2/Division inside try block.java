import java.util.Scanner;

public class W06_P3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read two integers
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();

        // Try block with multiple catch blocks
        try {
int result = (num1 / num2);
System.out.println("Division successful");
System.out.println("Result is: " +result  ); // Division inside try block

/*
Explanation:
- First catch block handles division by zero
- Second catch block handles other errors
- Multiple catch blocks improve control over different error types
*/
} catch (ArithmeticException e) {
            // Handles division by zero error
            System.out.println("Cannot divide by zero");
        } catch (Exception e) {
            // Handles other general errors
            System.out.println("An unexpected error occurred");
        }

        sc.close();
    }
}