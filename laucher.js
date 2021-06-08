class Laucher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.sling1=loadImage('sprites/sling1.png')
        this.sling2=loadImage('sprites/sling2.png')
        this.sling3=loadImage('sprites/sling3.png')
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.laucher.bodyA = null;
    }

    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.laucher.bodyA){
            var pointA = this.laucher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if(pointA.x<220){
                stroke('#301608')
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
            image(this.sling3,pointA.x-30,pointA.y-10,15,13)
            }
            else {
                stroke('#301608')
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20,pointA.y,pointB.x+30,pointB.y)
            image(this.sling3,pointA.x+20,pointA.y-10,15,13)
            }

            
        }
      bodyA.attach(body)  
    }
    
}