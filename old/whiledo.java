// do-while simple program

import java.util.Scanner;
public class whiledo {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        int a;
        do{
            System.out.println("enter the valid number greater than 10 ;");
             a=scan.nextInt();

        }while(a<=10);
        System.out.println("printed value :"+a);
        scan.close();
    }
    
}
