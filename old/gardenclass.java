//simple example for the function
public class gardenclass {
    int apple_count=20;
    int apple_price=5;
    void total_money(){
        System.out.println(apple_count*apple_price);
    }
    public static void main(String[] args) {
        gardenclass tot=new gardenclass();
        tot.total_money();
    }
}
