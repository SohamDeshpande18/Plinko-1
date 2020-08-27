class Ground {
    //creating constructor
   constructor(x, y) {
     //creating options for this.body/rectangle
     var options = {
         isStatic : true,
         restitution:0.8,
         friction:0.3,
         density:1.0
     }
     //creating rectangle
     this.body = Bodies.rectangle(x, y, 480, 10, options);
     this.width = 480;
     this.height = 10;
     //adding rectangle
     World.add(world, this.body);
   }
 
   //displaying everything
   display(){
     var pos =this.body.position;
     var angle = this.body.angle;
     push();
     translate (pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill(0);
     rect(0, 0, this.width, this.height);
     pop();
   }
 };