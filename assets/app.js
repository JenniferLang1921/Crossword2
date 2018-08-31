
$(document).ready(function () {
    
    //jquery is working!
    console.log("ready!");

    //makes arrow keys work, but only works right to left and left to right at this point
    $(document).keydown(
        function (e) {

            //makes focus jump to next input when a letter is typed

            $(".hideletter:focus").on('input', function() {
                $("input:focus").next().focus();


                              
            });

            switch (e.which) {
               
               
                case 39: //right
               
                

                    $(".hideletter:focus").next().focus();
                   
                    
                    break;


                case 40: //down doesn't work
                    $(".hideletter:focus").next().focus();
                   
                    break;

                case 37: //left
                    $(".hideletter:focus").prev().focus();
                    
                    break; 

                case 38: //up doesn't work
                    $(".hideletter:focus").next().focus();
                   
                    break;

                

                    default: return; // exit this handler for other keys  

            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        });
  //shows answers
    $('.answer').click(function () {
        $('.letter').val('');
        $('input').toggleClass('hideletter');
        // $('input').addClass('showletter');

    });

    //reloads the page
    $('#btnReset').click(function() {
        location.reload();
    });

      

});
