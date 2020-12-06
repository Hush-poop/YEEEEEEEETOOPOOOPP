class Wand{
    constructor(bodyA,bodyB){
      
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10
    }
this.wand=Constraint.create(options)
World.add(world,this.wand);
    }
    display(){
        var pointA=this.wand.bodyA.position;
        var pointB=this.wand.bodyB.position;
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}