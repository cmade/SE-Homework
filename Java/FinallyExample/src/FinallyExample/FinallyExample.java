package FinallyExample;

import java.util.Scanner;

public class FinallyExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		try {
			System.out.println(scan.next());
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e);
		}
		finally {
			scan.close();
		}
	}

}
