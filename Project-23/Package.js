class Package{

    constructor(x, y, r){

        var options ={

            restitution:0.5,
            isStatic : true
           
        }

        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("package.png");
        this.radius = r;
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position

        push();
        translate(pos.x, pos.y);

        imageMode(CENTER);
        image(this.image, 0, 0 , 50, 50 )

        pop();

    }

     keyPressed() {

        if (keyCode === DOWN_ARROW) {

            Matter.Body.setStatic(this.body,false);
        
      }

    }

}

