function parseCount(value) {
	let parseRes = Number.parseFloat(value);
	if (!parseRes) {
		throw new Error("Невалидное значение");
	}
	return parseRes;
}


function validateCount(value) {
	try {
		let parseRes = parseCount(value);
		if (parseRes) {
			return parseRes;
		}
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(firstSide, secondSide, thrirdSide) {
		this.firstSide = firstSide;
		this.secondSide = secondSide;
		this.thrirdSide = thrirdSide;
		if (firstSide + secondSide < thrirdSide || firstSide + thrirdSide < secondSide || secondSide + thrirdSide < firstSide) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return this.firstSide + this.secondSide + this.thrirdSide;
	}

	get area() {
		let halfPerimetr = this.perimeter / 2;
		return Number.parseFloat(Math.sqrt(halfPerimetr * (halfPerimetr - this.firstSide) * (halfPerimetr - this.secondSide) * (halfPerimetr - this.thrirdSide)).toFixed(3));
	}

}

class PseudoTriangle {
	get perimeter() {
		return "Ошибка! Треугольник не существует";
	}
	get area() {
		return "Ошибка! Треугольник не существует";
	}
}

function getTriangle(firstSide, secondSide, thrirdSide) {
	try {
		let triangle = new Triangle(firstSide, secondSide, thrirdSide);
		return triangle;
	} catch (err) {
		return new PseudoTriangle;
	}
}