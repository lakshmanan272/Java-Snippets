import java.util.Scanner;
public class nextif {
    public static void main(String[] args) {
         
        Scanner scan = new Scanner(System.in);
        int score = scan.nextInt();
        if(score<35){
            System.out.println("i can get video game");
        }
        else if(score<60){
            System.out.println("i can get iphone");
        }
        else if (score<90){
            System.out.println("i can get macbook pro");
        }
        scan.close();
    }
    
}
