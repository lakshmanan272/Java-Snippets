// simple example function parameter
public class fuctionpara {
    void soap(int money){
        System.out.println(money);
        System.out.println("you can get the soap now");

    }
    void soap(int money,String soap){
        System.out.println("you can get your liked soap now :"+soap+money);
    }
    public static void main(String[] args) {
        fuctionpara soaps = new fuctionpara();
        soaps.soap(10,"lux");
        soaps.soap(10);
    }
    
}
