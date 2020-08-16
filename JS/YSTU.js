var json = $.getJSON('main-data.json', function(json) {

    var tbody=document.getElementById("myTable-1"),tr = "",td = "";
         for (let i = 0; i < 3517; i++) {   
             tr=''
             td='' 
             td += "<td>" + json["YSTU0"][i].YSTU + "</td>";
         tr += "<tr>" + td + "</tr>";
         tbody.innerHTML += tr;
       }
         
        });        