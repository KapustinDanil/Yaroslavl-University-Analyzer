var a=document.getElementById("banner-root").getAttribute("data-cityId");
   console.log(a)
    var json = $.getJSON(a, function(json) {
var tbody=document.getElementById("myTable-1"),tr = "",td = "";
var ivan = json.YSTU0.length;
 for (let i = 0; i < ivan; i++) {   
     tr=''
     td='' 
     td += "<td>" + json["YSTU0"][i].YSTU + "</td>";
 tr += "<tr>" + td + "</tr>";
 tbody.innerHTML += tr;
}
 
});      