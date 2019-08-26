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