var a 
$(document).ready(function(){
    var ticker;
    $("#submit").click(function(){
      ticker=$("#ticker").val();
      $.post("/",{ticker: ticker}, function(data){
            //do things with data returned from app js
            a = data
            if(a === -1){
              data = 'NOT FOUND'
            }
            $("#iv").val(data)
      });
    });
  });