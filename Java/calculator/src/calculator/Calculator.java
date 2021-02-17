package calculator;

public class Calculator {

	static void add(int n1, int n2) {
		System.out.println(n1 + n2);
	}
	static void subtract(int n1, int n2) {
		System.out.println(n1 - n2);
	}
	static void multipliy(int n1, int n2) {
		System.out.println(n1 * n2);
	}
	static void divide(int n1, int n2) {
		System.out.println(n1 / n2);
	}
	public static void main(String[] args) {
		add(3,5);
		subtract(3,5);
		multipliy(3,5);
		divide(3,5);
	}

}
