function snake()
{
    this.x = floor(random(col))*scl;
    this.y = floor(random(col))*scl;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 1;
    this.tail  = [];
    this.tail.push(createVector(this.x,this.y));
    
    
    
    this.update = function(){
			
			
			if(!vision(this.x + this.xspeed*scl,this.y + this.yspeed*scl))
			{
				
				if(this.xspeed == 0)
				{
						if(vision(this.x + 1*scl,this.y) )
								{
									console.log(this.xspeed,this.yspeed);
												this.dir(1,0)
									console.log('changed dir',this.xspeed,this.yspeed);
								}
						else if(vision(this.x + (-1)*scl,this.y) )
						{
									console.log(this.xspeed,this.yspeed);
												this.dir(-1,0)
									console.log('changed dir',this.xspeed,this.yspeed);
						}
				
				}
				else
				{
					
						if(vision(this.x,this.y+1*scl) )
								{
									console.log(this.xspeed,this.yspeed);
												this.dir(0,1)
									console.log('changed dir',this.xspeed,this.yspeed);
								}
						else if(vision(this.x ,this.y+ (-1)*scl) )
						{
									console.log(this.xspeed,this.yspeed);
												this.dir(0,-1)
									console.log('changed dir',this.xspeed,this.yspeed);
						}
				
					
				
				}
				
				
				
				// pausegame();			 
			}
			
    this.x += this.xspeed*scl;
    this.y += this.yspeed*scl;
	this.x = constrain(this.x,0,width-scl);
	this.y = constrain(this.y,0,height-scl);

    this.death();
    this.tail.unshift(createVector(this.x,this.y));
    this.tail.pop();
    }
    
    this.show = function()
    {
    fill(0,255,0);
    this.tail.forEach((p)=> rect(p.x,p.y,scl,scl))
    }
    
    this.dir = function(xvector,yvector)
    {
        this.xspeed = xvector;
        this.yspeed = yvector;
    }
    
    this.eat = function(fd){
    var d = dist(this.x,this.y,fd.pos.x,fd.pos.y);
        if(d <2)
        {
            var temppos = createVector(this.x,this.y);
            fd.updatepos();
            this.total++;
            this.tail.unshift(temppos);
        }
    }
    
    this.death = function()
    {
        var currentpos = createVector(this.x,this.y);
       //  return this.tail.every((p)=>{
       // return !p.equals(currentpos)
       // })
        
        for(var i = 1;i<this.tail.length;i++)
        {
            if(this.tail[i].equals(currentpos))
            {
            // this.tail.forEach((o)=>console.log(o));
                
                
                // console.log(this.tail);
                
                console.log('gameove',currentpos);
                this.total  = 1;
                this.tail.splice(1);
                pausegame();
            
            }
        
        }
        
        
    }
    
    
    
}