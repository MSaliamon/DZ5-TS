class Circle {
  public readonly color: string;
  public readonly name: string;
  public readonly radius: number;

  constructor(color: string, name: string, radius: number) {
    this.color = color;
    this.name = name;
    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle {
  public readonly color: string;
  public readonly name: string;
  public readonly width: number;
  public readonly height: number;

  constructor(color: string, name: string, width: number, height: number) {
    this.color = color;
    this.name = name;
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

class Square {
  public readonly color: string;
  public readonly name: string;
  public readonly side: number;

  constructor(color: string, name: string, side: number) {
    this.color = color;
    this.name = name;
    this.side = side;
  }

  public calculateArea(): number {
    return this.side * this.side;
  }

  public print(): void {
    console.log(`Area = side * side`);
  }
}

class Triangle {
  public readonly color: string;
  public readonly name: string;
  // Add properties specific to Triangle
  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }

  public calculateArea(): number {
  // Add logic to calculate area of Triangle
  return 0; // Placeholder return statement
}
}