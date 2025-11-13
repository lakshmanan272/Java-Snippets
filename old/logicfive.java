// using logical operator (&&,||)
// if the number is divisible by 3and 5 print divisible 
// else not divisible

import java.util.Scanner;
public class logicfive {
    public static void main(String[] args) {
        
        Scanner scan = new Scanner(System.in);
        int num= scan.nextInt();
        if(num%3==0 && num%5==0){
              
            System.out.println("The given number is divisible by both 3 and 5");
           
        }
         
        else{
            System.out.println("The give number is not divisible by 3 and 5");
           }
           scan.close();
    }
}
