import java.util.Scanner;
public class multiplicationtable {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the table you want to print:");
        int a=scan.nextInt();
        System.out.println("Enter the number you want to stop the table :");
        int b=scan.nextInt();
        for(int i=1;i<=b;i++){
            int c=i*a;
            System.out.println(i+"*"+a+"="+c);

        }
        scan.close();
    }
    
}
