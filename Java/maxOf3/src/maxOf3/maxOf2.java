package maxOf3;

public class maxOf2 {

	// Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
	static int maxOfThree(int n1, int n2, int n3) {
		if(n1 > n2 && n1 > n3) 
			return n1;
		else if(n2 > n1 && n2 > n3)
			return n2;
		else
			return n3;
	}
	public static void main(String[] args) {
		System.out.println(maxOfThree(9,5,7));
	}
}
