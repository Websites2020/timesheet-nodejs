$(document).ready(function() {
    $("#spinner").hide();
    $('#employeeFormBtn').on("click", function() {
        $("#spinner").show().delay(12000);
        console.log("form works")
        $('#result').html('');
        $('#resultTable').html('');
        var text = $('select[name="employeeList"]').val();
        console.log(text);
        $.ajax({
            method: "GET",
            url: '/employee/' + text,
            dataType: "json",
           }).done(function( data ) {
                $("#spinner").hide();
                if (data == "") {
                    $('#result').html('');
                } else {
                    $( "#result" ).append("<table id='resultTable' class='table'><tr><th>Date</th><th>Start Time</th><th>End Time</th></tr>");
                    for (var i = 0; i < 14; i++) {
                     $( "#resultTable" ).append("<tr><td>" + data[i].date + "</td><td>" + data[i].starthh + ":" + data[i].startmm + "</td><td>" + data[i].endhh + ":" + data[i].endmm + "</td></tr>");
                    }
                    $( "#resultTable" ).append("</table>");
                }
            console.log("data returned")
        });
    });
});  // end document ready