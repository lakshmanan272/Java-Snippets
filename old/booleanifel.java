import java.util.Scanner;
public class booleanifel {
    public static void main(String args[]){
        Scanner scan=new Scanner(System.in);
        boolean raju =scan.nextBoolean();

        
        if(raju){
            System.out.println("yes raining");

        }
        else{
            System.out.println("no its not raining");
        }
        scan.close();
    }
    
}
