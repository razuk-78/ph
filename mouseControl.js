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