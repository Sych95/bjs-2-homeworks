function parseCount(count) {
    let parsedCount = Number.parseInt(count);
      
    if (isNaN(parsedCount)) {
      throw parseError = new Error('Невалидное значение');
    }
    return parsedCount;
}

function validateCount(count) {
    try {
      return parseCount(count)
    } catch(parseError){
      return parseError
    }
}

class Triangle {
    constructor(first, second, third) {
      if(first <= second + third && second <= first + third && third <= first + second){
        this.first = first,
        this.second = second,
        this.third = third
      } else {
       const triangleError = new Error('Треугольник с такими сторонами не существует');
       throw triangleError;
      }
    }
    getPerimeter () {
        return this.first + this.second + this.third;
    };

    getArea () {
        let halfPerimeter  = 0.5 * (this.first + this.second +this.third),
          areaHeron = Math.sqrt(halfPerimeter * (halfPerimeter - this.first) * (halfPerimeter - this.second) * (halfPerimeter - this.third));
    
        return +(areaHeron.toFixed(3)); 
    }
}

function getTriangle (a, b, c) {
    try {
     return new Triangle(a, b, c);
    }
    
    catch {
        let wrongTria = {
            getPerimeter () {
                return "Ошибка! Треугольник не существует"
            },
            getArea () {
                return "Ошибка! Треугольник не существует"
            }
        }
        return wrongTria
    }
}
  