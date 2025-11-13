//coustom array size and element and print the mid

import java.util.Scanner;
public class arraydemo4 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the size of the array :");
        int i = scan.nextInt();
        int arr[] = new int[i];
        for(int j=0;j<=i-1;j++){
            arr[j]=scan.nextInt();
        }
       int mid = arr.length/2; 
    //    length is 5,so the index start from 0 (length-1)
       System.out.println("The middle element of the array is :"+arr[mid-1]); 
       scan.close();


    }
    
}
