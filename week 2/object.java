import java.util.Scanner;

public class W04_P2 {

    // Declare class Car with a public member variable
    static class Car {
        public int speed; // Public access, can be accessed from outside the class
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read speed value
        int s = sc.nextInt();

        // Create Car object
        Car c = new Car();

        // Assign speed to the object
        c.speed = s;
System.out.println("Speed is: " + c.speed); // Access and print public member

/*
Explanation:
- The 'speed' variable is declared as public inside the Car class.
- Public members can be accessed anywhere in the program using the object reference.
- Here, c.speed accesses the variable, and we print it.
- This shows how public access works in Java.
*/
sc.close();
    }
}