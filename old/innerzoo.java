class animal{
    String name="";
    int age;
    void makesound(){
        System.out.println("Animal makes a sound");
    }

}
class dog extends animal{
    String breed;
    void makesound(){
        System.out.println("Dog barks");
    }
    void fetch(){
        System.out.println("Dog is fetching");
    }

}
class cat extends animal{
    String color;
    @Override
    void makesound() {
        System.out.println("cat meows");
    }
    void climb(){
        System.out.println("cat is climbing");
    }

}
public class innerzoo {
    public static void main(String[] args) {
    // class dog
    dog d =new dog();
    d.name="mani";
    d.age=20;
    d.breed="dolphine";
    d.makesound();
    d.fetch();
    // cat
    cat c=new cat();
    c.name="muna";
    c.age=20;
    c.color="white";
    c.makesound();
    c.climb();
        
    }
   

    
}
