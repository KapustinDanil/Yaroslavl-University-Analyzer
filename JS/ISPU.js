var json = $.getJSON('main-data.json', function(json) {

    var tbody=document.getElementById("myTable-3"),tr = "",td = "";
         for (let i = 0; i < 3517; i++) {   
             tr=''
             td='' 
             td += "<td>" + json["ISPU0"][i].ISPU + "</td>";
         tr += "<tr>" + td + "</tr>";
         tbody.innerHTML += tr;
       }
         
        });     