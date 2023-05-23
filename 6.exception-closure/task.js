function parseCount(value){
	if (!Number.parseFloat(value)) {
		const error=new Error("Невалидное значение");
		throw error;
 		} 
	return Number.parseFloat(value);
}  


function validateCount(value){
	try {
 		if (parseCount(value)) {
 			return parseCount(value);
 			}
 		} 
 	catch (error){
  	 return error;
  	 }
}
	
class Triangle {
	constructor(side_a, side_b, side_c){
		this.side_a=side_a;
		this.side_b=side_b;
		this.side_c=side_c;
		if (side_a+side_b<side_c||side_a+side_c<side_b||side_b+side_c<side_a) {
			const err=new Error("Треугольник с такими сторонами не существует");
			throw err;
		}
	}

	get perimeter() {
		return this.side_a+this.side_b+this.side_c;
	}

	get area() {
		return parseCount(Math.sqrt(this.perimeter/2*(this.perimeter/2-this.side_a)*(this.perimeter/2-this.side_b)*(this.perimeter/2-this.side_c)).toFixed(3));
	}

}

function getTriangle(side_a, side_b, side_c) {
	try {
		 const triangle=new Triangle(side_a, side_b, side_c);
		 return triangle;
		} catch (err) {
				   triangle.area="Ошибка! Треугольник не существует";
				   triangle.perimeter="Ошибка! Треугольник не существует";
			return (triangle);
		}	
}
