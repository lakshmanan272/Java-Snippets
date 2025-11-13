class vehicle{
    String brand;
    int year;
    void startEngine(){

    }

}
class car extends vehicle{
    String fuelType;
    @Override
    void startEngine() {
        System.out.println("car engine starts");
    }
    void drive(){
        System.out.println("car is driving");
    }
}
class Truck extends vehicle{
       int loadcapacity;
       @Override
       void startEngine() {
           System.out.println("Truck engine starts ");
       }
       void haul(){
        System.out.println("Truck is hauling");
       }
}
public class inner2{
    public static void main(String[] args) {
        // using object we can print info in all the above class
    }
}
