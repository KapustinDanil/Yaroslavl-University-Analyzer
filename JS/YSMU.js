    var json = $.getJSON('main-data.json', function(json) {
        var tbody=document.getElementById("myTable-4"),tr = "",td = "";
             for (let i = 0; i < 3517; i++) {   
                 tr=''
                 td='' 
                 td += "<td>" + json["YSMU0"][i].YSMU + "</td>";
             tr += "<tr>" + td + "</tr>";
             tbody.innerHTML += tr;
           }
             
            }); 