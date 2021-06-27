var a=document.getElementById("banner-root").getAttribute("data-cityId");
   console.log(a)
    var json = $.getJSON(a, function(json) {
var tbody=document.getElementById("myTable-3"),tr = "",td = "";
var ivan = json.ISPU0.length-1;
 for (let i = 0; i < ivan; i++) {   
     tr='';
     td='';
     td += "<td>" + json["ISPU0"][i].ISPU + "</td>";
 tr += "<tr>" + td + "</tr>";
 tbody.innerHTML += tr;
}
 
});    
