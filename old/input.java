import java.lang.System;
import java.util.Scanner;

public class input {

// using scanner to perform addition

 public static void main(String[] args) {
    Scanner john =new Scanner(System.in);
    String akil = john.nextLine();
    int a = john.nextInt();
    int b = john.nextInt();
    int c = john.nextInt();
   
    System.out.println(a+b+c);
    System.out.println(a*b*c);
    System.out.println(akil);
    john.close();

}

}
    

