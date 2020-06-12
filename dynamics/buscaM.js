var bod = document.getElementsByTagName("body");
var tab = document.createElement("table");
for (i=0; i<8; i++)
{
  var tr = document.createElement("tr");
  for (j=0; j<10; j++)
  {
    var td = document.createElement("td");
    td.id = "grey";
    tr.appendChild(td);
  }
  tab.appendChild(tr);
}
bod[0].appendChild(tab);
