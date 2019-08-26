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