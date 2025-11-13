//print divisible no b/t 3 and 5 using for loop
import java.util.Scanner;
public class fordemo4 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int count =0;
        System.out.println("Enter the starting number:");
         int a = scan.nextInt();
        System.out.println("Enter the ending number:");
       int b = scan.nextInt();
        for(int i=a;i<=b;i++){
            if(i%3==0 && i%5==0){
                System.out.println(i);
                count++;
            }
        }
        System.out.println("The total no that is divide by both"+a +"and"+ b + "is" + count);
        scan.close();
    }
}
