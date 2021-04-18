class Particle{
	constructor(x,y,r)
	{
		var options={
			isStatic: false,
			restitution:0.3,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        this.color = color(random(0,255), random(0,255), random(0,255))
		World.add(world, this.body);

	}
	display()
	{
            var parpos=this.body.position;		
            var angle = this.body.angle;	
			push()
			translate(parpos.x, parpos.y);
            rectMode(CENTER)
            rotate(angle);
            noStroke();
            fill(this.color)
            ellipseMode(RADIUS);
			ellipse(0,0,this.r, this.r);
			pop()
	}

}
