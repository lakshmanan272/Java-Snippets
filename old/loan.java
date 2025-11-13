import java.util.Scanner;
public class loan {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int salary= scan.nextInt();
        int age = scan.nextInt();
       

        if(salary>=20000 && age<=25){
            System.out.println("Enter the loan amount");            
             int loanamt = scan.nextInt();
             if(loanamt<=50000){
                System.out.println("you are eligible for loan");
             }
             else if(loanamt>50000){
                System.out.println("maximum loan amount is 50000");
             }
        }
        else{
            System.out.println("you are not eligible for loan");
        }
        scan.close();
    }
    
}
