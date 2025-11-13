// get 5 five subject mark from user
// mark percentage is lessthan 35 -need additional class
// else doesnot need 

import java.util.Scanner;
public class subject {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int sub1 = scan.nextInt();
        int sub2 = scan.nextInt();
        int sub3 = scan.nextInt();
        int sub4 = scan.nextInt();
        int sub5 = scan.nextInt();

        int total = sub1+sub2+sub3+sub4+sub5;
        if (total*100/500 <35){
            System.out.println("Additional class is required");
        }
        else{
            System.out.println("You are good to go");
        }
        scan.close();
    }
    
}
