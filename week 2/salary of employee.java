import java.util.Scanner;

public class W04_P4 {

    // Declare parent class Employee with a protected member variable
    static class Employee {
        protected int salary; // Protected member
    }

    // Subclass Manager inherits from Employee
    static class Manager extends Employee {
        // No additional members required for this task
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read salary value
        int s = sc.nextInt();

        // Create Manager object
        Manager m = new Manager();
m.salary = s; // Assign salary using protected member
System.out.println("Salary is: " + m.salary); // Access and print protected member

/*
Explanation:
- The variable 'salary' is declared protected in the Employee class.
- It can be accessed in the Manager class because of inheritance.
- In this case, both classes are in the same file, so access is allowed directly.
- This demonstrates how protected members can be used safely in subclass relationships.
*/
sc.close();
    }
}