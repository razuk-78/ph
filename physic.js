var List=[];
var can = document.getElementById("myCanvas");
var ctx=can.getContext("2d");
var helpFun = {alterListIndex:function(list,ind){
          
             var temp=list[ind];
             delete list[ind];
           return list.unshift(temp);
           },
};
var observer={
  collusionDetct:function(vectors, onCollusionDetect, onCollusionUnDetect ){
      setInterval(function(){
     for(var i=0;i<vectors.length;i++){
          for(var ii=0;ii<vectors.length;ii++){
     if(vector.getDistanceVectors(vectors[i],vectors[ii])<20){
          onCollusionDetect(vectors[i], vectors[ii]);
     }else{
           onCollusionUnDetect(vectors[i], vectors[ii]);
     }
     }
     }},100);
  }
}
var vector = {
  getMagnetude:function(vct){
       return Math.round(Math.sqrt(Math.pow(vct.x,2)+
                         Math.pow(vct.y,2)));
  },
  getDistanceVectors:function(vct1, vct2){
     return Math.round(Math.sqrt(Math.pow(Math.abs(vct1.x-vct2.x),2)
                       +Math.pow(Math.abs(vct1.y-vct2.y),2)));
  },

  sumVectors:function(vct1,vct2){
    var vct={x:0,y:0};
    vct.x=vct1.x+vct2.x;
    vct.y=vct1.y+vct2.y;
    return vct;
  },
    multiplyVectors:function(vct1,vct2){
    var vct={x:0,y:0};
    vct.x=vct1.x*vct2.x;
    vct.y=vct1.y*vct2.y;
    return vct;
  },


   
}

var mouseCtrl = function([]){
  var chk =false;
  var circ={};
  window.onmousedown=function(e){
    //console.log(List[0]);
  chk=true;
  var vct1={x:(e.pageX-can.offsetLeft),y:(e.pageY-can.offsetTop)};
   //console.log("reda: "+vector.getDistanceVectors(vct1,circ2))
   
  for(var i=0;i<List.length;++i){
   
     if(vector.getDistanceVectors(vct1,List[i])<28){
       circ=List[i];
    
  
     }
     
     
     }
  
 // console.log(vector.getDistanceVectors(vct1,circ));
  }
  window.onmousemove=function(e){
    if(chk){
     circ.x=(e.pageX-can.offsetLeft);
     circ.y=(e.pageY-can.offsetTop);
     //cr1.update(e.pageX,e.pageY)
    }
    
  }

 window.onmouseup=function(e){
  chk=false;
  circ =null;
  }
}
function circle(x,y,rad,name,color, mass){
    var totalDistance=0;
    this.avrgeSpeed;
    this.instantanouceSpeed;
    var main=this;
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
     
      },100);
    }
    var secondeCounter=0;
    var secondNumber=0;
   this.onMoving(
       //on moving
       function(newVct,oldVct){
        secondeCounter+= 1;
        secondNumber+= 1;
        totalDistance+=vector.getDistanceVectors(newVct,oldVct);
        //become one second
        if(secondeCounter>9){
          
          secondeCounter=0;
        }
     //on stop moving
   },function(v){
     if(totalDistance>0){
     secondNumber = 0;
     console.log(totalDistance);
     console.log("X: "+v.x+" Y: "+ v.y);
     console.log("iam stoped");}
     totalDistance=0;
   })

}



var circ1=new circle(300,200,25,"B","green",100);
var circ2=new circle(200,200,25,"A","red",100);
var circ3=new circle(400,200,25,"C","black",100);
var circ4=new circle(200,300,25,"D","yellow",100);
List=[circ1, circ2,circ3,circ4 ];
var ctr=new mouseCtrl([1,2]);
observer.collusionDetct(List,function(circle1, circle2){
    console.log(circle1.name);
 },function(circle1, circle2){


   
 });

setInterval(function(){
      ctx.clearRect(0, 0, can.width, can.height);
      for(var i=0;i<List.length;i++){
      List[i].draw();
      }
},100);