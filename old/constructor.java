public class constructor {
    int mark;
    int score;
    constructor(int a,int b){
         mark=a;
         score=b;

    }
    public static void main(String[] args) {
        constructor fun=new constructor(10, 20);
        System.out.println(fun.mark);
        System.out.println(fun.score);
    }
}
