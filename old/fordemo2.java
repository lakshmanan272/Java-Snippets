// print even numbers between 1 to 10
public class fordemo2 {
    public static void main(String[] args) {
        int count=0;
       
        for(int i=1;i<=10;i++){
            if(i%2==0){
                System.out.println(i);
                count++;
            }
        }
           System.out.println("Total even no : "+count);
    }
    
}
