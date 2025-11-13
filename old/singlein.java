// single inheritance simple example
// one base and derived call

class animal  {                           //
    void eat(){
        System.out.println("This animal can eat");
    }

    
}
class  dog extends animal {
    void bark(){
        System.out.println("Barks");
    }  
}


public class singlein {
    public static void main(String[] args) {
        dog d1 = new dog();
        d1.bark();
        // d1.eat();

    }
    
}
