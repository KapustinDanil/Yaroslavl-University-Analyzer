var a=document.getElementById("banner-root").getAttribute("data-cityId");
console.log(a)
 var json = $.getJSON(a, function(json) {
var tbody=document.getElementById("myTable-2"),tr = "",td = "";
var ivan = json.KGU0.length;
for (let i = 0; i < ivan; i++) {   
  tr='';
  td='';
  td += "<td>" + json["KGU0"][i].KGU + "</td>";
tr += "<tr>" + td + "</tr>";
tbody.innerHTML += tr;
}

}); 
