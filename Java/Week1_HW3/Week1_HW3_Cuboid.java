package Week1_HW3;

public class Week1_HW3_Cuboid extends Week1_HW3_Rectangle{

	public double height;

	Week1_HW3_Cuboid(double width, double length, double height) {
		super(width, length);
		 if(height<0) {
    		 this.height=0; 
    	 }else {
    		 this.height=height;
    	 }
			 }
	public double getHeight() {
		return this.height;
		
	}
	public double getVolume() {
		return this.getArea()*this.height;
	}
		
}



