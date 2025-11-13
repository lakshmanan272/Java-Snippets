// odd or even
import java.util.Scanner;
public class evenodd {
    public static void main(String[] args) {
        Scanner scan= new Scanner(System.in);
        System.out.println("Enter the number :");
        int num = scan.nextInt();
        if (num>0) {
            if(num%2==0){
            System.out.println("it is even ");
        }
          else{
            System.out.println("it is odd");
        }
            
        }
        else{

          
            System.out.println("Enter a vaild positive number");
        }
      scan.close();
      
    }
    
}
