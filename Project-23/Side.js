class Side{

    constructor(x, y, width, height){

        var options ={

            isStatic : true,
  
        }

        this.body = Bodies.rectangle(x,y,20,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);

        rectMode(CENTER);

        fill("red");
        stroke("yellow")
        rect(0, 0, this.width, this.height);

        pop();

    }

}

