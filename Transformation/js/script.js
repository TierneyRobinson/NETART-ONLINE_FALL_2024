$(document).mousemove(function(e) {

  let path = ["#def3fc", "#e7fcde", "#fcfade", "#fce0de", "#d2ecfc", "#d8d2fc", "#d2fcd6", "#fcf6d2"]
  $(".change").css('background-color', path[Math.floor(Math.random() * path.length)]);

});
//this is the code I found online and adjusted^^//


//I made these vv buttons B)//

$(".butn1").click(function(){
                $(".textappear").toggle();   
       $(".butn2").toggle();
                });
$(".butn2").click(function(){
    $(".invrtbg").toggle();
});


