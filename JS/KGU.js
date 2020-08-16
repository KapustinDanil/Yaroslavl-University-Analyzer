    var json = $.getJSON('main-data.json', function(json) {
        var tbody=document.getElementById("myTable-2"),tr = "",td = "";
             for (let i = 0; i < 3517; i++) {   
                 tr=''
                 td='' 
                 td += "<td>" + json["KGU0"][i].KGU + "</td>";
             tr += "<tr>" + td + "</tr>";
             tbody.innerHTML += tr;
           }
             
            });