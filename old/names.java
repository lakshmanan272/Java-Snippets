import java.util.Scanner;
import java.lang.System;
public class names {
    public static void main(String[] args) {

        Scanner scanner=new Scanner(System.in);
        String name,address ;
        int age ;
     
        name=scanner.nextLine();
        age=scanner.nextInt();
        scanner.nextLine();
        address=scanner.nextLine();
        System.out.println("your name is :"+name);
        System.out.println("your age is :"+age);
        
        System.out.println("your address is :"+address);
        scanner.close();

        

        
    }
}
