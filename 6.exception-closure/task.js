function parseCount(value) {
    const parsedValue = Number.parseFloat(value);

    if (isNaN(parsedValue)) {  // Если результат NaN, выбрасываем ошибку с текстом "Невалидное значение"
        throw new Error("Невалидное значение");
    }
    return parsedValue;
}

function validateCount(value) {
    try {
        let result = parseCount(value);
        return result;
    } catch (error) {
        return error;
    }
}


// Задача 2
class Triangle {
    constructor(sideA, sideB, sideC) {
        if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;   //Геттер perimeter должен возвращать периметр треугольника.
    }

    get area() {
        let semiPerimeter = this.perimeter / 2;     // Полупериметр

        let triangleArea = Math.sqrt(
            semiPerimeter * (semiPerimeter - this.sideA) * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC)
        )     //рассчитываем площадь

        return parseFloat(triangleArea.toFixed(3));   // округляем 
    }
}


function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);                   // Попытайтесь вернуть новый объект треугольника.
    } catch (error) {
        // В случае перехвата исключения возвращаем объект с ошибкой
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}
