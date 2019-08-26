var helpFun = {alterListIndex:function(list,ind){
          
    var temp=list[ind];
    delete list[ind];
  return list.unshift(temp);
  },
};