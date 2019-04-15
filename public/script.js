$(document).ready(function() {
    $('#employeeFormBtn').on("click", function() {
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
                if (data == "") {
                    $('#result').html("<button id='clockin' class='btn btn-success'>Clock In</Button>");
                } else {
                    console.log("length: " + data.length);
                    $( "#result" ).append("<table id='resultTable' class='table'><tr><th>Date</th><th>Start Time</th><th>End Time</th></tr>");
                    for (var i = 0; i < data.length; i++) {
                     $( "#resultTable" ).append("<tr><td>" + data[i].date + "</td><td>" + data[i].starthh + ":" + data[i].startmm + "</td><td>" + data[i].endhh + ":" + data[i].endmm + "</td></tr>");
                    }
                    console.log("end hour: " + data[data.length-1].endhh);
                    if (data[data.length-1].endhh != "") {
                        $( "#resultTable" ).append("</table><br><button id='clockin' class='btn btn-success'>Clock In</Button><button id='delete' class='btn btn-danger float-right'>Reset</Button>");
                    } else {
                        $( "#resultTable" ).append("</table><br><button id='clockout' class='btn btn-warning'>Clock Out</Button><button id='delete' class='btn btn-danger float-right'>Reset</Button>");
                    }
                }
            console.log("data returned")
            $('#clockin').on("click", function() {
                var id = data.length+1;
                $.ajax({
                    method: "POST",
                    url: '/updatein/' + id + '/' + text,
                    dataType: "json",
                    success: function(datas, textStatus, jqXHR)
                    {
                        console.log("clocked in")
                       $('#employeeFormBtn').trigger('click');
                       alert("You have clocked in")
                    
                    },
                    error: function (jqXHR, textStatus, errorThrown)
                    {
                        alert("something went wrong.  Unable to clock in")
                    }
                   }).then(function( datas ) {
                       
                });
            });
            $('#clockout').on("click", function() {
                var id = data.length;
                $.ajax({
                    method: "POST",
                    url: '/updateout/' + id + '/' + text,
                    dataType: "json",
                    success: function(datas, textStatus, jqXHR)
                    {
                        console.log("clocked out")
                       $('#employeeFormBtn').trigger('click');
                       alert("You have clocked out")
                    },
                    error: function (jqXHR, textStatus, errorThrown)
                    {
                        alert("something went wrong.  Unable to clock out")
                    }
                   }).then(function( datas ) {
                       
                });
            });
            $('#delete').on("click", function() {
                $.ajax({
                    method: "POST",
                    url: '/delete/' + text,
                    dataType: "json",
                    success: function(datas, textStatus, jqXHR)
                    {
                        console.log("clocked out")
                       $('#employeeFormBtn').trigger('click');
                       alert("All times Erased")
                    },
                    error: function (jqXHR, textStatus, errorThrown)
                    {
                        alert("something went wrong.  Unable to clear times")
                    }
                   });
            });
        });
    });

    

});  // end document ready