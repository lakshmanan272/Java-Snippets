// random number 

import java.util.Random;      //class name
public class whilerand {
    public static void main(String[] args) {
        Random rand =new Random(); //initialisation
        for(int i=1;i<=10;i++){

        int newnum = rand.nextInt(10);//using random number object
        while(newnum==5){
             System.out.println(newnum);
            break; 
        }
        }
    }
}
