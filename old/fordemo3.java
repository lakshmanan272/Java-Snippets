// print odd numbers between 1 to 10
public class fordemo3 {
    public static void main(String[] args) {
        int count=0;
       
        for(int i=1;i<=10;i++){
            
            if(i%2==1){
                System.out.println(i);
                count++;
            }
            
        }
        System.out.println("Total odd no : "+count);
    
    }
    
}
