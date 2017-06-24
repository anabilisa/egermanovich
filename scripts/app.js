$( document ).ready(function() {
    //hang on event of form with id=myform
    $("#myform").submit(function(e) {

        //prevent Default functionality
        e.preventDefault();

        var data = {};
        var $myform = $("#myform");
        $myform.serializeArray().map(function(x){data[x.name] = x.value;});

        //do your own request an handle the results
        $.ajax({
            type: 'POST',
            url: "/send",
            crossDomain: true,
            dataType: 'json',
            data: data,
            success: function(responseData, textStatus, jqXHR) {
                console.log("Success")
            },
            error: function (responseData, textStatus, errorThrown) {
                console.log("failed")
            }
        });

        $myform.trigger('reset');

    });
});