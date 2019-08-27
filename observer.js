var observer={
    collisionDetct:function(vectors, onCollisionDetect, onCollisionUnDetect ){
        setInterval(function(){
       for(var i=0;i<vectors.length;i++){
            for(var ii=0;ii<vectors.length;ii++){

       if(vector.getDistanceVectors(vectors[i],vectors[ii])<50&&vectors[i].name!=vectors[ii].name ){
            onCollisionDetect(vectors[i]);
       }else{
             onCollisionUnDetect(vectors[i], vectors[ii]);
       }
       }
       }},100);
    }
  }