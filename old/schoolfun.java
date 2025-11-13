
import java.util.Scanner;
public class schoolfun {

    String logic(int mark){
        String c ;
        if(mark>=35){
             c="pass";
        }
        else{
             c="fail";
        }
        return c;
    }
    public static void main(String[] args) {
        schoolfun score = new schoolfun();
        Scanner scan =new Scanner(System.in);
        int mark =scan.nextInt();
        String marks= score.logic(mark);
        System.out.println(marks);
        scan.close();



    }

}
