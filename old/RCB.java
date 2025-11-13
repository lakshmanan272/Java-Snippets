import java.util.Scanner;
import java.lang.System;
public class RCB {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        String RCB= scan.nextLine();
        if(RCB.equals("WIN")){
            System.out.println("Ee sala cup Namdhey");
        }
        if(RCB.equals("LOOSE")){
            System.out.println("cup illa");
        }
        scan.close();
        
    }
    
}
