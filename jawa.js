function table(){
    let table = document.getElementById("num").value;
let showResult; document.getElementById("heading").innerHTML 
= "";
for (let index = 1; index<=10;index++)
{showResult = table + "x"+index+"="+table*index;
result = "<h1>"+showResult+"</h1>";
document.getElementById("heading").innerHTML+=result;
}
}