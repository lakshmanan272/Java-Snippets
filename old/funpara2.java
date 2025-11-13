public class funpara2 {
    
    void sum(int a ,int b){
        System.out.println(a+b);
        
    }
    void sub(int a ,int b){
        System.out.println(a-b);
    }
    void mul(int a ,int b){
        System.out.println(a*b);
    }
    void div(int a ,int b){
        System.out.println(a/b);
    }
    public static void main(String[] args) {
        funpara2 fun=new funpara2();
        fun.sum(10,20);
        fun.sub(10,20 );
        fun.mul(10, 20);
        fun.div(10, 20);
    }
}
