// score lessthan 50 -improve
// score greater 50 and lessthan 70 -goodjob
// score greater 70 - excellent 
import java.util.Scanner;
public class gamescore {
    public static void main(String[] args) {
        
        Scanner scan = new Scanner(System.in);
        int score = scan.nextInt();
        if(score<50){
            System.out.println("you need to improve");
        }
        else if(score>=50 && score<=70){
            System.out.println("Good job!");
        }
        else if(score>70){
            System.out.println("Excellent performance!");
        }
        scan.close();

    }
    
}
