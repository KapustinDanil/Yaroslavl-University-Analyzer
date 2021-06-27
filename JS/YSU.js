
   var a=document.getElementById("banner-root").getAttribute("data-cityId");
   console.log(a)
    var json = $.getJSON(a, function(json) {
console.log(json["YSU0"][0].YSU); // this will show the info it in firebug console
var tbody=document.getElementById("myTable"),tr = "",td = "";
var ivan = json.YSU0.length;
 for (let i = 0; i < ivan; i++) {   
     tr='';
     td=''; 
     td += "<td>" + json["YSU0"][i].YSU + "</td>";
 tr += "<tr>" + td + "</tr>";
 tbody.innerHTML += tr;
}
 
});  
