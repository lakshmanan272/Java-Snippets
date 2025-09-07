import java.util.Scanner;

public class W04_P3 {

    // Declare class Account with a private member variable
    static class Account {
        private int balance; // Private member, cannot be accessed directly from outside

        // Method to set balance value
        public void setBalance(int b) {
            balance = b;
        }
public int getBalance() {
    return balance; // Return the private member value
}

/*
Explanation:
- The 'balance' variable is private, so it cannot be accessed directly from outside the class.
- The method getBalance() is public and provides controlled access to the private variable.
- This follows the principle of encapsulation, which improves security and protects data.
*/
}

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read balance value
        int b = sc.nextInt();

        // Create Account object
        Account acc = new Account();

        // Set balance using method
        acc.setBalance(b);

        // Print balance using the method
        System.out.println("Account Balance is: " + acc.getBalance());

        sc.close();
    }
}