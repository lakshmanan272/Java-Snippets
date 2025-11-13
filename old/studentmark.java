import java.util.Scanner;
import java.lang.System;
public class studentmark {
    public static void main(String[] args) {
        String name,department;
        int Score,result;
        Scanner scanner=new Scanner(System.in);
        name = scanner.nextLine();
        Score=scanner.nextInt();
        scanner.nextLine();
        department=scanner.nextLine();
        result = Score*10/100;
        System.out.println("your name is"+name);
        System.out.println("your score is "+Score);
        System.out.println("your department is "+department);
        System.out.println("your score for 10 is "+result);
        scanner.close();


        
    }
}
