package Week1_HW2;


import java.util.*;

public class Week1_HW2 {

	
	//  Write a Java program to copy one array list into another
	public static void main(String[] args) {
		ArrayList<String> workers = new ArrayList<String>();
		
		workers.add("Tom");
		workers.add("Jerry");
		workers.add("Larry");
		workers.add("Fez");
	
		System.out.println("Workers before  " + workers);
        ArrayList<String> newWorker =new ArrayList<String> ();
        
        newWorker.add("Lisa");
        newWorker.add("Jenny");
        
        Collections.copy(workers, newWorker); // copying automobile arrayList to the cars array list
        
        System.out.println("Workers after " + workers);
        
        
      //Write a Java program to extract a portion of a array list  
        
        ArrayList<String> clothes = new ArrayList<String>();
        
        clothes.add("Gucci");
        clothes.add("Fendi");
        clothes.add("Prada");
        System.out.println("Before extraction " + clothes);
        
        clothes.subList(0, 2);//index from beginning and ending
        
        List<String> newClothes =clothes.subList(1, 3); // create a List with new variable and call tree variable with subList
        
        System.out.println("After extraction " + newClothes);
    
       // Write a Java program of swap two elements in an array list
        
        ArrayList<String> rappers = new ArrayList<String>();
        
        rappers.add("JayZ");
        rappers.add("Chance");
        rappers.add("Puffy");
        rappers.add("Kanye");
        rappers.add("DMX");
        
        System.out.println("Before swaping "+rappers);
        
        Collections.swap(rappers, 2, 3); //added index number 
        
        System.out.println("After swaping "+rappers);
        
        // Write a Java program to test an array list is empty or not
        
        ArrayList<String> day = new ArrayList<String>();
        
        day.add("Monday");
        
        Boolean check  = day.isEmpty(); //checks if arrayList empty or not= returns boolean
          
        System.out.println(check);
         
        // Write a Java program to replace the second element of a ArrayList with the specified element.
       
        ArrayList<String> fish = new ArrayList<String>();
        
        fish.add("salmon");
        fish.add("talapia");
        
        System.out.println("Before replace "+ fish);
        
        String fish1 = "Red Snapper";
        fish.set(1, fish1); // replaced talapia with Red Snapper
        
        System.out.println("after replacing elements "+ fish);
        
        // Write a Java program to trim the capacity of an array list the current list size
        
        ArrayList<String> luxury = new ArrayList<String>();
        
        luxury.add("Lambo");
        luxury.add("Porsche");
        luxury.add("BMW");
        luxury.add("Lexus");
        luxury.add("Tesla");
        
        System.out.println("Before trim " +luxury);
        
        luxury.trimToSize();
       
       System.out.println("After trim " +luxury);
        
       // Write a Java program to test a hash set is empty or not.

        HashSet<String> teas = new HashSet<String>();
        
        teas.add("Green tea");
        teas.add("English tea");
        teas.add("Hibiscus tea");
        
        System.out.println("HashSet elemets " + teas);
        
        Boolean hashCheck = teas.isEmpty();
        System.out.println("Check if HashSet is empty or not return boolean => " + hashCheck);
        
        // Write a Java program to get the number of elements in a hash set
        
        HashSet<Number> heights = new HashSet<Number>();
        
        heights.add(6);
        heights.add(5);
        heights.add(4);
        
        int numberOfHashSet = heights.size();
        System.out.println("Number of HashSet number elements => " + numberOfHashSet);
        
        // Write a Java program to iterate through all elements in a hash list.
        
        HashSet<String> apple = new HashSet<String>();
        
        apple.add("Iphone3");
        apple.add("Iphone4");
        apple.add("Iphone5");
        apple.add("IphoneX");
        
        Iterator<String> Phones =apple.iterator(); 
        
        while(Phones.hasNext()) { // 
        	   System.out.println(Phones.next());
        }
     
        // Write a Java program to convert a hash set to an array.
        
        HashSet<String> color = new HashSet<String>();
        
        color.add("green");
        color.add("blue");
        color.add("black");
        color.add("orange");
        
        System.out.println("HashSet " + color);
        
        ArrayList<String> arr = new ArrayList<String>(color);
        
        System.out.println("Convert HashSet to ArrayList " + color);
        
        // Write a Java program to compare two sets and retain elements which are same on both sets.

          HashSet<String> tacos = new HashSet<String>(); // first hasSet 
          
          tacos.add("Beef tacos");
          tacos.add("Chicken tacos");
          tacos.add("Carnitas tacos");
          tacos.add("Bean tacos");
          
          System.out.println( "First HashSet " + tacos);
          
          HashSet<String> tacos2 = new HashSet<String>(); // second hashSet
          
        
          tacos2.add("Cold tacos");
          tacos2.add("Beef tacos");
          tacos2.add("Hot tacos");
         
          
          tacos2.retainAll(tacos); // compare HashSets: tacos2 and tacos
          System.out.println("Compare HashSet " + tacos2);

	} 

}