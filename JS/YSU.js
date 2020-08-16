var json = $.getJSON('main-data.json', function(json) {

    console.log(json["YSU0"][0].YSU); // this will show the info it in firebug console
    var tbody=document.getElementById("myTable"),tr = "",td = "";
         for (let i = 0; i < 3517; i++) {   
             tr=''
             td='' 
             td += "<td>" + json["YSU0"][i].YSU + "</td>";
         tr += "<tr>" + td + "</tr>";
         tbody.innerHTML += tr;
       }
         
        });  