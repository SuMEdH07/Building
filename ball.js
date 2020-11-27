class ball{
    constructor(x,y,radius){
      var options ={
          restitution:1
      }   
    this.body = Matter.Bodies.circle(x, y, radius, options)
    this.radius=radius;
    
    World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        circle(pos.x, pos.y, this.radius*2);
    }
}