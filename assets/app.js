$(document).ready(function () {
    
    //jquery is working!
    console.log("ready!");

    //makes arrow keys work, but only works right to left at this point
    $(document).keydown(
        function (e) {
            switch (e.which) {
                case 40:
                    $(".hideletter:focus").next().focus();
                    break;

                case 39:
                    $(".hideletter:focus").next().focus();
                    break;
                case 38:
                    $(".hideletter:focus").next().focus();
                    break;

                case 37:
                    $(".hideletter:focus").next().focus();
                    break;

            }
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

