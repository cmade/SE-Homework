package Week1_Day2_AfternoonLab;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Week1_Day2_AfternoonLab {
	static String[] addToArray(String x) {
		String[] shoppingList = new String[] {  "cool ranch doritos",  "kings hawaiian sweet bread",  "peanut butter oreos",  "fruit loops cereal"};
		String[] newShoppingList = new String[5];
		newShoppingList[4] = x;
		System.arraycopy(shoppingList, 0, newShoppingList, 0, shoppingList.length); 
		return newShoppingList;
	}
	static String[] reverseArray(String[] yoda) {
		List<String> list = Arrays.asList(yoda);
		Collections.reverse(list);
		yoda = (String[]) list.toArray();
		return yoda;
	}
	public static void main(String[] args) {
		// What is an efficient way to create an array for first 50 integers?
		// With a for loop
		System.out.println(Arrays.toString(addToArray("Hendricks gin")) );
		String [] arr = {"try", "no", "is", "there", "not", "do", "or", "do"}; 
		System.out.println(Arrays.toString(reverseArray(arr, arr.length)));
	}

}
