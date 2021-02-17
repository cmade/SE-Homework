package tryCatch;

import java.util.InputMismatchException;
import java.util.Scanner;

public class TryCatch {

//	public static void main(String[] args) {
//		// TODO Auto-generated method stub
//		try {
//			int[] a = {4,5,6};
//			System.out.println(a[3]);
//		} catch (Exception e) {
//			// TODO: handle exception
//			System.out.println(e);
//		}
//		
//	}
	
//	public static void main(String[] args) {
//		try {
//			System.out.println("What is your favorite number?");
//			Scanner scan = new Scanner(System.in);
//			int number = scan.nextInt();
//			System.out.println(number);
//		} catch (Exception e) {
//			// TODO: handle exception
//			System.out.println("Enter a number please");
//		}
//	}
	
	public static void main(String[] args) {
		try {
			System.out.println("What is your favorite number?");
			Scanner scan = new Scanner(System.in);
			int number = scan.nextInt();
			System.out.println(number);
		} catch (InputMismatchException e) {
			// TODO: handle exception
			System.out.println("This is an input mismatch error");
		}
	}

}
