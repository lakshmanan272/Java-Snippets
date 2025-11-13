//simple programming using return keyword
//void does not return anything
public class funret {
     int sum(int a ,int b){
        int c=a+b;
      return c;
        
    }
    public static void main(String[] args) {
        funret fun =new funret();
       int get = fun.sum(20, 30);
       System.out.println("The sum is :"+get);

    }
}
