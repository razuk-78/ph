var circle=function (x,y,rad,name,color, mass){
  
    var totalDistance=0;
    var main=this;
    this.avrgeSpeed;
    this.instantanouceSpeed;
    this.oldX=this.x;this.oldY=this.y;
    this.stillX=this.x;this.stillY=this.y;
    this.getMagnetude=function(newMag, oldMag){
        return Math.abs(newMag-oldMag);
    };
    this.direction="";
    this.x = x; this.y = y;this.rad=rad;
    this.name = name; this.mass = mass; this.color=color;
    this.draw = function(x=this.x,y=this.y,rad=this.rad,name=this.name,color=this.color){
        var writeText=function(){
       //ToDo 
       // ctx.font="30px Arial black";
       //ctx.fillStyle="black";
       //ctx.fillText(this.name, this.x, this.y);
      }
           ctx.beginPath();
           ctx.arc(x,y,rad,0,2*Math.PI);
           ctx.fillStyle=color;
           ctx.lineWidth=5;
           ctx.fill();
           ctx.strokeStyle="red";
           ctx.stroke();
    
      
    }
        
    this.onMoving=function(movingCallBabck,stopMovingCallBackBack, getDirection){
              
      setInterval(function(){
                  
                  if(main.oldX!=main.x||main.oldY!=main.y){  
                     main.oldX=main.x;main.oldY=main.y;
                    var newVect={x:main.x,y:main.y};
                    var oldVect={x:main.stillX,y:main.stillY};
                    movingCallBabck(newVect,oldVect);
                  }else{
                        main.stillY=main.y;main.stillX=main.x;
                        stopMovingCallBackBack(main);
                        
                  }
     
      },1000);
    }
    var secondeCounter=0;
    var secondNumber=0;

   this.moveInCircle=function(r){
     var i=0;
     setInterval(()=>{
       i++;
        this.x=this.x+r*Math.sin(i);
        this.y=this.y+r*Math.cos(i);
     },100);
    
   }
  
   var Speed =0;
 

   this.getSpeed=function(){

      return speed;

   }
   this.onMoving(
       //on moving
       function(newVct,oldVct){
        secondeCounter+= 1;
        secondNumber+= 1;
        totalDistance +=vector.getDistanceVectors(newVct,oldVct);
        speed = vector.getDistanceVectors(newVct,oldVct);
    
     //on stop moving
   },function(v){
     if(totalDistance>0){
     secondNumber = 0;
     console.log(totalDistance);
     console.log("X: "+v.x+" Y: "+ v.y);
     console.log("iam stoped");}
     totalDistance=0;
     speed=0;
   })

}
