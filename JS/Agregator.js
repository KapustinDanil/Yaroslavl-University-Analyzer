var a=document.getElementById("banner-root").getAttribute("data-cityId");
   console.log(a)
    var json = $.getJSON(a, function(json) {
var tbody=document.getElementById("myTable-5"),tr = "",td = "";
var ivan = json.Agregator0.length;
 for (let i = 0; i < ivan; i++) {   
     tr='';
     td='';
     td += "<td>" + json["Agregator0"][i].agregator + "</td>";
 tr += "<tr>" + td + "</tr>";
 tbody.innerHTML += tr;
}
 
}); 
