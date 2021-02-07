package Week1_Day2;

public class Week1_Day2 {

//Write a method maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
	static int maxOfTwoNumbers(int n1, int n2) {
		if(n1 > n2) 
			return n1;
		else 
			return n2;
	}
	public static void main(String[] args) {
		System.out.println(maxOfTwoNumbers(3,5));
	}

}
