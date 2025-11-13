class animal{
    int age=10;
    animal(){
        System.out.println("hello laksh");
    }
}
class king extends animal{
    int age=20;
    king(){
        System.out.println(age);

    }

}

public class supers {
    public static void main(String[] args) {
        king k=new king();
        
        
    }

    
}