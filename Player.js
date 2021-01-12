class Player
{
constructor(x,y)
{
var options={
   'friction':0.8 ,
   'density': 1.0,
   //'isStatic':true

 
}
this.body=Bodies.rectangle(x,y,50,50,options);
this.width= 50;
this.height=50;
World.add(world,this.body);

}
display()
{

var angle=this.body.angle;
var pos=this.body.position;
push()
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
 
}

left()
{
 this.body.position.x=this.body.position.x-5;
}

right()
{
this.body.position.x=this.body.position.x+5;
}
}