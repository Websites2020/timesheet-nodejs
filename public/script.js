$(document).ready(function() {
    $('#employeeFormBtn').on("click", function() {
        console.log("form works")
        var text = $('select[name="employeeList"]').val();
        console.log(text);
        $.ajax({
            method: "GET",
            url: '/employee/' + text,
            dataType: "json",
           }).done(function( data ) {
                $( "#result" ).append("<table id='resultTable'><tr><th>Date</th><th>Start Time</th><th>End Time</th></tr>");
               for (var i = 0; i < 14; i++) {
                $( "#resultTable" ).append("<tr><td>" + data[i].date + "</td><td>" + data[i].starthh + ":" + data[i].startmm + "0" + "</td><td>" + data[i].endhh + ":" + data[i].endmm + "0" + "</td></tr>");
               }
               $( "#resultTable" ).append("</table>");
            console.log("data returned")
        });
    });
});

// success: function(data){
//     $('#result').html(data[4].date);
//     console.log(data[4].date);
//  },
//  error: function(){
//    alert('failure');
//  }