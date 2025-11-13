public class stringobj {
    public static void main(String[] args) {
        
 // normal string comparition (it compare the reference)
// both string address are same 

        String s1="apple";
        String s2="apple";

         if(s1==s2){
            System.out.println("equal");
        }
        else{
            System.out.println("not equal"); 
        }  


// object string comparition 
// both string has different address

        String s3=new String("apple");
        String s4=new String("apple");
            
        if(s3==s4){
            System.out.println("equal");
        }
        else{
            System.out.println("not equal");
        }

    }
    
}
