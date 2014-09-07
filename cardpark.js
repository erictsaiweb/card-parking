
$(document).ready(function(){
    $('div').click(function(){
      $(this).toggleClass("checked");
      $(this).text(Date())
    });

});

