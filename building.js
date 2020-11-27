class building{
    constructor(x,y,height,width){
      var options ={
          restitution:1
      }   
    this.body = Matter.Bodies.rectangle(x, y, width, height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        rect(pos.x, pos.y, this.width,this.height);
    }
}