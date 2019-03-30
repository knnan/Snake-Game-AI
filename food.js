function food()
{
	var x = floor(random(col))*scl;
	var y = floor(random(col))*scl;
	this.pos = createVector(x,y);
    
    this.updatepos = ()=>
    {
        this.pos.x = floor(random(col))*scl;
        this.pos.y = floor(random(col))*scl;
        
    }
    
    
    this.show = function()
    {
        stroke(0);
        fill(140,0,125);
        rect(this.pos.x,this.pos.y,scl,scl);
    }
    
}