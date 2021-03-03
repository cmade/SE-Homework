package Week1_HW3;

public class Week1_HW3_Rectangle {

	public static void main(String[] args) {
		
//		Write a class with the name Rectangle. The class needs two fields (instance variable) 
//		with name width and length both of type double.The class needs to have one constructor 
//		with parameters width and length both of type double and it needs to initialize the fields.
//		In case the width parameter is less than 0 it needs to set the width field value to 0.
//		In case the length parameter is less than 0 it needs to set the length field value to 0.
//		Write the following methods (instance methods):



		
		Week1_HW3_Rectangle rectangle = new Week1_HW3_Rectangle(40, 100);
		
//		Method named getWidth without any parameters, it needs to return the value of width field.
		System.out.println("rectangle width is " + rectangle.getWidth());
		
//		Method named getLength without any parameters, it needs to return the value of length field.
		System.out.println("rectangle length is " + rectangle.getLength());
		
//		Method named getArea without any parameters, it needs to return the calculated area (width * length).
		System.out.println("rectangle area is " + rectangle.getArea());
		
//		Write a class with the name Cuboid that extends Rectangle class.
//		The class needs one field (instance variable) with name height of type double. 
//		The class needs to have one constructor with three parameters width, length, 
//		and height all of type double. It needs to call parent constructor and initialize a height field.
//		In case the height parameter is less than 0 it needs to set the height field value to 0.
//		Write the following methods (instance methods):

//		To calculate volume multiply the area with height.
		
		Week1_HW3_Cuboid cuboid = new Week1_HW3_Cuboid(7,14,53);
		
		System.out.println("cuboid width is " + cuboid.getWidth());
		System.out.println("cuboid length is " + cuboid.getLength());
		System.out.println("cuboid area is " + cuboid.getArea());
		
//		Method named getHeight without any parameters, it needs to return the value of height field.
		System.out.println("cuboid height is " + cuboid.getHeight());
		
//		Method named getVolume without any parameters, it needs to return the calculated volume. 
		System.out.println("cuboid volume is " + cuboid.getVolume());
}
	
	 private double width;
	 private double length;
     Week1_HW3_Rectangle(double width, double length){
    	 if(width <0 && length<0) {
    		 this.width=0;
 			this.length=0;
    		 
    	 }else{
    		 this.width=width;
    		 this.length=length; 
    	 }
			 }
     
    public double getWidth(){
    	return this.width;
    	 
     }
    public double getLength() {
    	return this.length;
    }
     public double getArea() {
    	 return this.length*this.width;
     }
}