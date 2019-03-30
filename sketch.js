let s;
let f;
let scl = 10;
let col;
let pause = true;
let curdir = 'R';

let  = {left:true,right:true,up:true,down:true}
let chksafedir = 'safe';

function setup() {
    createCanvas(600, 600);
    col = width / scl;
    s = new snake();
    f = new food();
    // frameRate(30);
}

function draw() {
    if(pause)
    {
    background(51);
    s.show();
        snakeai();
			takeaction();
    s.update();
    s.eat(f);
    f.show();
		}    
}


function pausegame()
{
    if(pause)
    {
    // loop();
        
        
        pause = false;
    }
    
    else
    {
        // noLoop();
        pause = true;
    }
}



function chdir()
{
    if(s.xspeed == 1 || s.xspeed == -1)
       {
       return true;
       }
    else
        return false;
}

 function vision(Xcor,Ycor)
    {
        var currentpos = createVector(Xcor,Ycor);
       //  return this.tail.every((p)=>{
       // return !p.equals(currentpos)
       // })
        
        for(var i = 1;i<s.tail.length;i++)
        {
            if(s.tail[i].equals(currentpos))
            {
            // this.tail.forEach((o)=>console.log(o));
                
                
                // console.log(this.tail);
                
                return false;
						}
        
        }
	return true;

}
function snakeai()
{
    

    var x =  s.x -f.pos.x;
    var y = s.y - f.pos.y;
    
    
    
    if(x >0 && !chdir() )
    {
        
        
        			
        curdir = 'L';
        // console.log('left called')
    }
    else if(x <0 && !chdir() )
    {
        
        curdir = 'R';
        // console.log('RIGHT called')
    }
    else if(y <0 && chdir() )
    {
        
    curdir = 'D';
        // console.log('DOWN cakked')
    }
    else if(y >0 && chdir() )
    {
        
        curdir = 'U';
    	
        // console.log('UP called')
    }
    else if(x==0)
    {
        // // console.log('x ==0');
         if(y <0 && chdir() )
    {
        
    curdir = 'U';
    	
    }
    else if(y >0 && chdir() )
    {
        
        curdir = 'D';
    	
        
    }
//         else if(!chdir() )
//         {
//             var aheadorbegore2 = s.y -f.pos.y;
//             if((s.yspeed == 1 && (aheadorbegore2 > 1))  || (s.yspeed == -1 && (aheadorbegore2 < 1)) )
//                {
                   
//             var tmdir2 = ['R','L']
//             curdir  = tmdir2[floor(random(2))];
//             // console.log('spedial move :',curdir);
            
                   
//                }
            
//         }
    }
    else if(y==0)
    {
        // // console.log('y ==0');
        if(x >0 && !chdir() )
    {
        
        
        curdir = 'L';
    	
    }
    else if(x <0 && !chdir() )
    {
        
        
        
        curdir = 'R';
    	
            
    }
//         else if(chdir() )
//         {
//             var aheadorbegore = s.x -f.pos.x;
//             if((s.xspeed == 1 && (aheadorbegore > 1))  || (s.xspeed == -1 && (aheadorbegore < 1)) )
//                {
               
                   
//             var tmdir = ['U','D']
//             curdir  = tmdir[floor(random(2))];
//             // console.log('spedial move :',curdir);
            
//                }
         
//         }
        
    }
    
}





function checkbodyinway()
{
    var status = false;
    if(chdir())
    {
        s.tail.slice(1).forEach((p)=>{
            
        if(p.x === s.x)
        {
            // // console.log('hor',p.x,s.x);
            
            if(abs(p.y - s.y) < (3*scl))
            {
                if((p.y - s.y) < (3*scl))
                {
                    chksafedir = 'up';
                }
                else
                {
                    chksafedir = 'down';
                }
            // console.log('returning trye 1',chksafedir);
                
            }
           
        }
        })
        
    }
    else
    {
        s.tail.slice(1).forEach((p)=>{
        if(p.y === s.y)
        {
            // console.log('verti',p.y,s.y);
            if(abs(p.x - s.x) < (3*scl))
            {
           
                if((p.x - s.x) < (3*scl))
                {
                    chksafedir = 'left';
                
                } 
                else
                    
                    
                    
                    
                    
                {
                    
                    chksafedir = 'right';
                }
            console.log('returning trye 2',chksafedir);
            }
           
        }
        })
        
    }
    return status;
}

function takeaction()
{
if(curdir == 'U')
{
    if(s.xspeed != 0 && s.yspeed != 1)
    	s.dir(0,-1);
    
}
else if(curdir == 'D')
{
    if(s.xspeed != 0 && s.yspeed != -1)
        s.dir(0,1);
}
else if(curdir == 'R')
{

    if(s.xspeed != -1 && s.yspeed != 0)
        s.dir(1,0);
}

else if(curdir == 'L')
{
    if(s.xspeed != 1 && s.yspeed != 0)
        s.dir(-1,0)
}


}

function keyPressed()
{
    
if(keyCode == UP_ARROW)
{
    if(s.xspeed != 0 && s.yspeed != 1)
    	s.dir(0,-1);
    
}
else if(keyCode == DOWN_ARROW)
{
    if(s.xspeed != 0 && s.yspeed != -1)
        s.dir(0,1);
}
else if(keyCode == RIGHT_ARROW)
{

    if(s.xspeed != -1 && s.yspeed != 0)
        s.dir(1,0);
}

else if(keyCode == LEFT_ARROW)
{
    if(s.xspeed != 1 && s.yspeed != 0)
        s.dir(-1,0)
}


else if(keyCode == ENTER)
   	pausegame();
    
}