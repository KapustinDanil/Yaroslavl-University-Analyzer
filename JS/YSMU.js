var a=document.getElementById("banner-root").getAttribute("data-cityId");
console.log(a)
 var json = $.getJSON(a, function(json) {
var tbody=document.getElementById("myTable-4"),tr = "",td = "";
var ivan = json.YSMU0.length;
for (let i = 0; i < ivan; i++) {   
  tr=''
  td='' 
  td += "<td>" + json["YSMU0"][i].YSMU + "</td>";
tr += "<tr>" + td + "</tr>";
tbody.innerHTML += tr;
}

}); 