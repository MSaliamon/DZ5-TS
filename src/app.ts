abstract class Shape {
  public readonly color: string;
  public readonly name: string;

  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }

  abstract calculateArea(): number;
}

class Circle extends Shape {
  public readonly radius: number;

  constructor(color: string, name: string, radius: number) {
    super(color, name);
    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  public readonly width: number;
  public readonly height: number;

  constructor(color: string, name: string, width: number, height: number) {
    super(color, name);
    this.width = width;
    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }

  public print(): void {
    console.log(`Area = width * height`);
  }
}

class Square extends Shape {
  public readonly side: number;

  constructor(color: string, name: string, side: number) {
    super(color, name);
    this.side = side;
  }

  public calculateArea(): number {
    return this.side * this.side;
  }
  
  public print(): void {
    console.log(`Area = side * side`);
  }
}

class Triangle extends Shape {
  constructor(color: string, name: string) {
    super(color, name);
  }

  public calculateArea(): number {
    return 0; 
  }
}