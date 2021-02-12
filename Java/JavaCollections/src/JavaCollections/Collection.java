package JavaCollections;

import java.util.*;


public class Collection {

	public static void main(String[] args) {
		HashSet<String> cars = new HashSet<String>();
		cars.add("Rav4");
		cars.add("Ford");
		System.out.println(cars);
		
//		Map<Integer, String> x;
//		HashMap<Integer, String> hm = new HashMap<Integer, String>();
//		hm.put(0, "Ford");
//		x = hm;
//		System.out.println(x);
//		hm.put(1, "Lambo");
//		hm.put(4, "Porsche");
//		System.out.println(hm);
//		
//		for(Integer i : hm.keySet()) {
//			System.out.println(hm.get(i));
//		}
		
//		List<String> x;
//		
//		LinkedList<String> names = new LinkedList<String>();
//		x = names;
//		names.add("Tom");
//		System.out.println(x);
//		names.addFirst("Mary");
//		names.addLast("Juniper");
//		System.out.println(names);
		
		
//		Integer[] a = {4,8,1,0,6,3};
//		
//		ArrayList<Integer> numbers = new ArrayList<Integer>();
//		
//		Collections.addAll(numbers, a);
//		Collections.sort(numbers);
//		System.out.println("Unsorted: " + Arrays.toString(a) + " Sorted: " + numbers);
//		System.out.println(instanceof a + " " + );
//		numbers.add(1);
//		numbers.add(2);
//		numbers.add(3);
//		numbers.add(4);
//		numbers.add(5);
//		numbers.add(6);
//		numbers.set(0, 100);
		//Returns the entire array list
//		for(Object o : numbers)
//			System.out.println("Array list: " + o);
		//Takes out the index
//		System.out.println("Remove: " + numbers.remove(3));
		
		//Tells you the size
//		System.out.println("Size: " + numbers.size());
		
		//toArray method
//		Object[] numbersArr = numbers.toArray();
//		for(Object o : numbersArr)
//			System.out.println("toArray list: " + o);
		//Stored in the stack
//		System.out.println(numbers);
//		int[] arr = new int[5];
		//Stored in the heap
//		System.out.println(arr);
	}

}
