// simple example using array
 
import java.util.Scanner;
public class arraydemo1 {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
         int sum =0;
        int play[]=new int[5];
        for(int i=0;i<5;i++){
               play[i]=scan.nextInt();

        }
   sum=play[0]+play[1]+play[2]+play[3]+play[4];
   System.out.println(sum);
     scan.close();
    }
    
}
