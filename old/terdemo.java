// print the max using ternary
import java.util.Scanner;
public class terdemo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();
        String c = a>b?"a":"b";
        System.out.println(c);
        scan.close();
    }
    
}
