// if income is greater than 7000 
// scholorship is available 
// lessthan 7000 ,not eligible for scholorship
import java.util.Scanner;
public class incomes {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter yout income:");
        int income= scan.nextInt();
        if(income>7000){
            System.out.println("scholarship is available for you");
        }
        else{
        System.out.println("Scholarship is not available for you");     
       }
        
       scan.close();
    }
    
}
