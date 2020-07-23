class Circle
{
  constructor(radius)
  {
    this.radius = radius;
  }

  //Diameter = radius • 2
  set diameter(d)
  {
    this.radius = d/2;
  }
  get diameter()
  {
    return (2 * this.radius);
  }

  //Circumference = π • diameter
  set circumference(c)
  {
    this.diameter = c/Math.PI;
  }
  get circumference()
  {
    return (Math.PI * this.diameter);
  }

  //Area = π • radius2
  set area(a)
  {
    this.radius = Math.sqrt(a/Math.PI);
  }
  get area()
  {
    return (Math.PI * (this.radius)**2);
  }
 
}